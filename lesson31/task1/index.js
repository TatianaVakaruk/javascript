export const requestUserData = (userId) => {
  // put your code here
  const request = new Promise((resolve, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return request;
};

requestUserData("userid777").then((data) => console.log(data));
requestUserData("broken").catch((error) => console.log(error));
