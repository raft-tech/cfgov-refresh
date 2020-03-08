import add from '@cfpb/cfpb-icons/src/icons/add.svg';

export const NavItem = ({ icon, label }) => {
  return (
    <li className="action__link">
      <div className="action__link-icon" dangerouslySetInnerHTML={{ __html: icon }} />
      <div className="action__link-label">{label}</div>
    </li>
  );
};

export const ActionLink = ({ icon, label }) => {
  return (
    <ul>
      <NavItem icon={add} label="Show" />
    </ul>
  );
};
