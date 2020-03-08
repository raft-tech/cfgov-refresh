import { ReactComponent as PlusSign } from '../../assets/plus-sign-icon.svg';
import { ReactComponent as ErrorIcon } from '../../assets/error-icon-round.svg';
import { ReactComponent as DollarSignIcon } from '../../assets/dollar-sign.svg';
import { ReactComponent as PencilEditIcon } from '../../assets/pencil-edit.svg';
import { ReactComponent as StarIcon } from '../../assets/star-icon.svg';
import { ReactComponent as ExclamationPointIcon } from '../../assets/exclamation-point.svg';
import { ReactComponent as LightBulb } from '../../assets/light-bulb.svg';
import { ReactComponent as ExternalLinkIcon } from '../..//assets/external-link.svg';
import { ReactComponent as UpArrowIcon } from '../../assets/up-arrow.svg';
import { ReactComponent as SaveIcon } from '../../assets/disk.svg';

import '../../styles/Icon.scss';

export const Icon = ({ type }) => {
  return (
    <div className="icon-background">
      {(() => {
        switch (type) {
          case 'close-icon':
            return <ErrorIcon className="plus-minus-icon" />;
          case 'pencil-edit-icon':
            return <PencilEditIcon className="pencil-edit-icon" />;
          case 'dollar-sign-icon':
            return <DollarSignIcon className="dollar-sign-icon" />;
          case 'open-icon':
            return <PlusSign className="plus-minus-icon" />;
          case 'star-icon':
            return <StarIcon className="star-icon" />;
          case 'exclamation-point':
            return <ExclamationPointIcon className="exclamation-point" />;
          case 'light-bulb':
            return <LightBulb className="light-bulb" />;

          case 'up-arrow-icon':
            return <UpArrowIcon className="up-arrow-icon" />;
          case 'external-link-icon':
            return <ExternalLinkIcon className="external-link-icon" />;
          case 'save-icon':
            return <SaveIcon className="save-icon" />;

          default:
            return <div>There is an error on the Icon component</div>;
        }
      })()}
    </div>
  );
};
