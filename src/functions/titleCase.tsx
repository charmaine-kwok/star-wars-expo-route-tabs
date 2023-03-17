function titleCase(str: string) {
  return str
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}

export default titleCase;
