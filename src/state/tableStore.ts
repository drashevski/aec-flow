import { create } from 'zustand';
import { SlabType } from '../types/slabType';
import { UserCategory } from '../enums/user';
import { StartData } from './data';

const createSlab = (): SlabType => ({
  id: Math.round(Math.random() * 100000).toString(16),
  planReference: 'Plane',
  location_x: Math.random() * 100,
  location_y: Math.random() * 100,
  location_z: Math.random() * 100,
  strength: 'C25/30',
  dimensions_l: Math.random() * 100,
  dimensions_w: Math.random() * 100,
  dimensions_h: Math.random() * 100,
  liveload: Math.random() * 100,
  typeOfElement: 'type of element',
  rebarDiameterTop: Math.random() * 100,
  rebarAmountTop: Math.random() * 100,
  rebarDiameterBottom: Math.random() * 100,
  rebarAmountBottom: Math.random() * 100,
});

const createSlabs = () => {
  const slabs = [];
  for (let i = 0; i < 10; i++) slabs.push(createSlab());

  return slabs;
};

type TableStore = {
  elements: SlabType[];
  updateElement: (element: SlabType) => void;
  userCategory: UserCategory;
  setUserCategory: (c: UserCategory) => void;
};

export const useTableStore = create<TableStore>((set) => ({
  elements: StartData,
  updateElement: (element: SlabType) =>
    set((s) => {
      const index = s.elements.findIndex((e) => e.id === element.id);
      if (index !== -1) s.elements[index] = { ...element };
      return { elements: [...s.elements] };
    }),
  userCategory: UserCategory.Architect,
  setUserCategory: (userCategory: UserCategory) => set((s) => ({ userCategory })),
}));
