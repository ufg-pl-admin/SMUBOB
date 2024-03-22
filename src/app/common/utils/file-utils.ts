export default class FileUtils {

  /**
   * Zamienia bity na bajty w postaci string
   * @param bytes bajty
   */
  static sizeToMB(bytes: number): string {
    const mb = bytes / 1024 / 1024;
    const roundedMb = Math.ceil(mb * 100) / 100;
    return roundedMb.toFixed(2);
  }

  /**
   * Zamienia bity na bajty w postaci numerycznej
   * @param bytes bajty
   */
  static sizeToNumericMB(bytes: number): number {
    return bytes / 1024 / 1024;
  }

  static sprawdzCzyPrzekraczaDopuszczalnaSume(zalaczniki: File[], rozmiar: number, dopuszczalnaSuma: number): boolean {
    const totalSizeInB = zalaczniki
      .map((zalacznik) => zalacznik.size || 0)
      .reduce((acc, curr) => acc + curr, 0);
    const rozmiarMB = this.sizeToNumericMB(rozmiar);
    const totalSizeInMB = this.sizeToNumericMB(totalSizeInB);
    return (totalSizeInMB + rozmiarMB) > dopuszczalnaSuma;
  }

}
