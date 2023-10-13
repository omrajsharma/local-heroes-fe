import { enqueueSnackbar } from "notistack";

enum AlertType {
  SUCCESS,
  ERROR,
  WARNING,
  INFO,
  DEFAULT,
}

export default function AppAlert(alertType: AlertType, message: string) {
  if (alertType === AlertType.SUCCESS) {
    enqueueSnackbar(message, {
      variant: "success",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  } else if (alertType === AlertType.ERROR) {
    enqueueSnackbar(message, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  } else if (alertType === AlertType.WARNING) {
    enqueueSnackbar(message, {
      variant: "warning",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  } else if (alertType === AlertType.INFO) {
    enqueueSnackbar(message, {
      variant: "info",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  } else {
    enqueueSnackbar(message, {
      variant: "default",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  }
}
