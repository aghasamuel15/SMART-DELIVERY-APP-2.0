// Placeholder API utilities - replace with real endpoints
export async function createDelivery(payload){
  // call your backend to create delivery, return delivery id
  return { id: 'PROTOTYPE-1234', status: 'created' };
}
export async function getDeliveryStatus(id){
  return { id, status: 'in_transit', driver: { name: 'Tunde', phone: '+234800' } };
}
