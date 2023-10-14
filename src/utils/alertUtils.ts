import { enqueueSnackbar } from "notistack";

export enum AlertTypeEnum {
  SUCCESS,
  ERROR,
  WARNING,
  INFO,
  DEFAULT,
}

export default function AppAlert(alertType: AlertTypeEnum, message: string) {
  if (alertType === AlertTypeEnum.SUCCESS) {
    enqueueSnackbar(message, {
      variant: "success",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  } else if (alertType === AlertTypeEnum.ERROR) {
    enqueueSnackbar(message, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  } else if (alertType === AlertTypeEnum.WARNING) {
    enqueueSnackbar(message, {
      variant: "warning",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  } else if (alertType === AlertTypeEnum.INFO) {
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
