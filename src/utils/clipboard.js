export async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const element = document.createElement("textarea");
  element.value = text;
  element.setAttribute("readonly", "");
  element.style.position = "absolute";
  element.style.left = "-9999px";
  document.body.appendChild(element);
  element.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(element);
  return copied;
}
