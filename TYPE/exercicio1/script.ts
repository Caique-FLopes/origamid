interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === 'object' &&
    ('nome' in obj || 'email' in obj || 'cpf' in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function validJSON(string: string) {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
}

function loadLocalStorage() {
  const localUserData: string = localStorage.getItem('UserData');
  if (localUserData && validJSON(localUserData)) {
    const userData = JSON.parse(localUserData);
    if (isUserData(userData)) {
      Object.entries(userData).forEach(([key, value]) => {
        const input: HTMLElement = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem('UserData', JSON.stringify(window.UserData));
    console.log(target.id);
  }
}

const form = document.querySelector<HTMLElement>('#form');

loadLocalStorage();
form?.addEventListener('keyup', handleInput);
