export function scrollToSection(section) {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
};
