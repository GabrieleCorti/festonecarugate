export const postMessage = async (message: { text: string; name: string }) => {
  try {
    await fetch("https://festone-be.herokuapp.com/api/comments", {
      method: "POST",
      body: JSON.stringify(
        message.name === "" ? { ...message, name: "Anonimo" } : message
      ),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.debug(error);
    throw error;
  }
};
