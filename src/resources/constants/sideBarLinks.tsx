import generalTexts from './generalTexts';
import { TIcon } from '../../components/common/Icon';

type TLink = {
  id: string,
  path: string,
  label: string,
  icon: TIcon['icon']
}

const sideBarLinks: TLink[] = [
  {
    id: 'newDelivery', path: '/', label: generalTexts.sideBar.links.newDelivery, icon: 'plus',
  },
  {
    id: 'myDeliveries', path: '/my-deliveries', label: generalTexts.sideBar.links.myDeliveries, icon: 'truck',
  },
  {
    id: 'history', path: '/history', label: generalTexts.sideBar.links.history, icon: 'history',
  },
];

export default sideBarLinks;
