import axios from "axios";

export async function resolveResponse(promise) {
  try {
    // Success Response
    return (await promise).data; //هي property جوه response object بتاع axios
  } catch (err) {
    // Error
    console.log("Resolve Response Error:", err);

    if (axios.isCancel(err)) {
      // Cancelled
      return { ResultCode: 0, Message: "canceled" };
    }

    // Session Expired?
    if (err.message.toLowerCase().includes("sessionexpired")) {
      // Session Expired
      console.log("-----------Session Expired-----------");

      // await Alerts.showError(i18next.t("global:401"));

      return;
    }

    // ApplicationError
    let additionalData = "";

    if (err.response && err.response.data) {
      if (err.response.data.Message) additionalData = "\n" + JSON.stringify(err.response.data.Message);
      else additionalData = "\n" + JSON.stringify(err.response.data);
    }

    // Log Error
    console.error(err.message + additionalData);
    // await Alerts.showError(i18next.t("global:ApplicationError"));

    return {
      code: -1,
      key: "ApplicationError",
      response: err.message,
    };
  }
}
