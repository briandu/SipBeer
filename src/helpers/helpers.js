export function scrollToSection(section) {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
};
