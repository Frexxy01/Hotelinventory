import { InitService } from "./init.service";

export function initializeApp(InitService: InitService) {
  return () => InitService.init();
}