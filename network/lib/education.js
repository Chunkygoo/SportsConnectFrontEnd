import myAxiosPrivate from '../myAxiosPrivate';
import { getCsrfToken } from './auth';

export async function createEducation(createObject) {
  try {
    let csrfToken = await getCsrfToken();
    let myAxios = myAxiosPrivate(csrfToken);
    let res = await myAxios.post(`/educations`, createObject).catch((e) => {
      return e.response;
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getEducations() {
  try {
    let csrfToken = await getCsrfToken();
    let myAxios = myAxiosPrivate(csrfToken);
    let res = await myAxios.get(`/educations`).catch((e) => {
      return e.response;
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function updateEducation(id, updateObject) {
  try {
    let csrfToken = await getCsrfToken();
    let myAxios = myAxiosPrivate(csrfToken);
    let res = await myAxios
      .put(`/educations/${id}`, updateObject)
      .catch((e) => {
        return e.response;
      });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteEducation(id) {
  try {
    let csrfToken = await getCsrfToken();
    let myAxios = myAxiosPrivate(csrfToken);
    let res = await myAxios.delete(`/educations/${id}`).catch((e) => {
      return e.response;
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}