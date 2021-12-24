import generalTexts from './generalTexts';
import { TIcon } from '../../components/common/Icon';

type TLink = {
  id: string,
  label: string,
  icon: TIcon['icon']
}

const sideBarLinks: TLink[] = [
  { id: 'newDelivery', label: generalTexts.sideBar.links.newDelivery, icon: 'plus' },
  { id: 'myDeliveries', label: generalTexts.sideBar.links.myDeliveries, icon: 'truck' },
  { id: 'history', label: generalTexts.sideBar.links.history, icon: 'history' },
];

export default sideBarLinks;
