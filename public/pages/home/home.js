import { register } from "/src/entities/user/api";
import { User } from "/src/entities/user/model";
import { MyInput } from "/src/shared/ui/MyInput";

const app = document.querySelector("#app")


export function init() {  
  const user = new User("Ulajon", "1234", "email.@gmail.com", "cowboy", "Ulugbek Abdukarimov")

  console.log(user);
  console.log(register(user));

  const userNameInput = MyInput("username", "text", "Username", "/icons/Vector.svg");



  app.appendChild(userNameInput);
}

