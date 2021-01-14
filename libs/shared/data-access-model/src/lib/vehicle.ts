export interface Vehicle {
  id: string;
  name: string;
  pz: string;
  nbpz: string;
  type: string;
  zt: string;
  bz: string;

}

export function generateMockVehicle(): Vehicle {
  return {
    id: '1',
    name: '车辆名称',
    pz: '车辆牌照',
    nbpz: '内部牌照',
    type: '车辆类型',
    zt: '使用状态',
    bz: '备注'
  };
}

