import {
  IconFilter,
  IconPlus,
  IconPencil,
  IconPencilCancel,
  IconList,
  IconChevronUp,
  IconCalendarEvent,
  IconBrowser,
  IconWorldWww,
  IconSettings,
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
  IconCalendar,
  IconCalendarDue,
  IconPhotoSensor,
  IconSubtask,
  IconCheck,
  IconCash,
  IconTools,
  IconEyeOff,
  IconEye,
  IconCamera,
  IconPigMoney,
  IconCircle,
  IconCircleCheckFilled,
  IconX,
  IconCoins,
  IconProgress,
  IconProgressCheck,
  IconAsterisk,
  IconInfoCircle,
  IconLogout,
  IconExternalLink,
  IconMessageCircleQuestion,
  IconShare,
  IconBlockquote,
  IconUserX,
  IconCameraRotate,
  IconBolt,
  IconBoltOff,
} from '@tamagui-icons/icon-tabler';

// @todo I'll fix this later
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getIconsUtil = (name: string): any => {
  switch (name) {
    case 'IconEyeOff':
      return IconEyeOff;
    case 'IconEye':
      return IconEye;
    case 'IconCamera':
      return IconCamera;
    case 'IconCircle':
      return IconCircle;
    case 'IconBolt':
      return IconBolt;
    case 'IconBoltOff':
      return IconBoltOff;
    case 'IconCameraRotate':
      return IconCameraRotate;
    case 'IconUserX':
      return IconUserX;
    case 'IconCoins':
      return IconCoins;
    case 'IconInfoCircle':
      return IconInfoCircle;
    case 'IconWorldWww':
      return IconWorldWww;
    case 'IconBrowser':
      return IconBrowser;
    case 'IconCash':
      return IconCash;
    case 'IconTools':
      return IconTools;
    case 'IconBlockquote':
      return IconBlockquote;
    case 'IconShare':
      return IconShare;
    case 'IconMessageCircleQuestion':
      return IconMessageCircleQuestion;
    case 'IconExternalLink':
      return IconExternalLink;
    case 'IconLogout':
      return IconLogout;
    case 'IconAsterisk':
      return IconAsterisk;
    case 'IconProgress':
      return IconProgress;
    case 'IconProgressCheck':
      return IconProgressCheck;
    case 'IconX':
      return IconX;
    case 'IconChevronUp':
      return IconChevronUp;
    case 'IconChevronLeft':
      return IconChevronLeft;
    case 'IconChevronRight':
      return IconChevronRight;
    case 'IconChevronDown':
      return IconChevronDown;
    case 'IconCalendar':
      return IconCalendar;
    case 'IconCalendarDue':
      return IconCalendarDue;
    case 'IconSubtask':
      return IconSubtask;
    case 'IconPigMoney':
      return IconPigMoney;
    case 'IconPencil':
      return IconPencil;
    case 'IconPencilCancel':
      return IconPencilCancel;
    case 'IconCheck':
      return IconCheck;
    case 'IconPhotoSensor':
      return IconPhotoSensor;
    case 'IconPlus':
      return IconPlus;
    case 'IconFilter':
      return IconFilter;
    case 'IconList':
      return IconList;
    case 'IconCalendarEvent':
      return IconCalendarEvent;
    case 'IconSettings':
      return IconSettings;
    case 'IconCircleCheckFilled':
      return IconCircleCheckFilled;
    default:
      return IconFilter;
  }
};
