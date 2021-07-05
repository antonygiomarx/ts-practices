abstract class Phone {
  brand: string;
  usbType: string;
  screenType: string;
  screenSize: string;
  audioJack: boolean | undefined;
  batteryCapacity: string;
  cameraCount: number;
  principalCamera: string;
  processor: string;
  ram: string;
  model: string;
  storage: string;
  cpu: string;

  abstract charge(): void;

  constructor({
    brand,
    audioJack,
    cameraCount,
    principalCamera,
    processor,
    ram,
    screenSize,
    screenType,
    usbType,
    batteryCapacity,
    model,
    storage,
    cpu,
  }: Phone) {
    this.audioJack = audioJack;
    this.brand = brand;
    this.cameraCount = cameraCount;
    this.batteryCapacity = batteryCapacity;
    this.principalCamera = principalCamera;
    this.processor = processor;
    this.ram = ram;
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.usbType = usbType;
    this.model = model;
    this.storage = storage;
    this.cpu = cpu;
  }
}

abstract class AndroidPhone extends Phone {
  androidVersion: string;
  kernel: string;
  constructor({
    brand,
    audioJack,
    cameraCount,
    principalCamera,
    processor,
    ram,
    screenSize,
    screenType,
    usbType,
    batteryCapacity,
    model,
    storage,
    cpu,
    androidVersion,
    kernel,
    charge,
  }: AndroidPhone) {
    super({
      audioJack,
      brand,
      batteryCapacity,
      cameraCount,
      principalCamera,
      processor,
      ram,
      screenSize,
      screenType,
      usbType,
      model,
      storage,
      cpu,
      charge,
    });
    this.androidVersion = androidVersion;
    this.kernel = kernel;
  }
}

export class XiaomiPhone extends AndroidPhone {
  constructor({
    androidVersion,
    audioJack,
    batteryCapacity,
    cameraCount,
    cpu,
    kernel,
    model,
    principalCamera,
    processor,
    ram,
    screenSize,
    screenType,
    storage,
    usbType,
    charge,
  }: XiaomiPhone) {
    const brand = "Xiaomi";
    super({
      androidVersion,
      audioJack,
      batteryCapacity,
      brand,
      cameraCount,
      cpu,
      kernel,
      model,
      principalCamera,
      processor,
      ram,
      screenSize,
      screenType,
      storage,
      usbType,
      charge,
    });
  }

  charge(): void {
    console.log("Xiaomi está cargando.");
  }
}
