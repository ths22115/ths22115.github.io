export const PORT_SECTION_WIP = {
  webdev: false,
  design: true,
};

export function isPortSectionWip(section) {
  return PORT_SECTION_WIP[section] === true;
}
