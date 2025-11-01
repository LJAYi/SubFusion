async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return await res.text();
}

function parseNodes(text) {
  return text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => /^(vmess|ss|trojan|vless):\/\//i.test(l));
}

function makeYAML(nodes) {
  let y = "proxies:\n";
  nodes.forEach((n, i) => {
    y += `  - name: "Node-${i + 1}"\n    remark: "${n}"\n`;
  });
  y += "\nproxy-groups:\n  - name: 🚀 Proxy\n    type: select\n    proxies:\n";
  nodes.forEach((_, i) => (y += `      - "Node-${i + 1}"\n`));
  y += "\nrules:\n  - MATCH,🚀 Proxy\n";
  return y;
}

async function convert(mode, subUrl, workerUrl) {
  const output = document.getElementById("output");
  output.value = "⏳ 正在生成...";
  try {
    if (mode === "local") {
      const txt = await fetchText(subUrl);
      const nodes = parseNodes(txt);
      output.value = makeYAML(nodes);
    } else {
      if (!workerUrl) throw new Error("未填写 Cloudflare Worker 地址");
      const r = await fetch(
        `${workerUrl}?target=clash&url=${encodeURIComponent(subUrl)}`
      );
      output.value = await r.text();
    }
  } catch (e) {
    output.value = "❌ 错误：" + e.message;
  }
}
