export class FileUploaderUtils {


  /**
   * @description
   * Returns allowed filetypes as a string like '.txt, .xls, .bmp, ...'.
   *
   * @param divider Optional divider (default: ,)
   */
  static getAllowedFileTypesString(allowedFileTypes: Array<string>, divider = ','): string {
    return '.' + allowedFileTypes.join(divider + '.');
  }


  /**
   * @description
   * Returns a FontAwesomeIcon for the given filetype extracted from the filename
   *
   * @param filename
   */
  static getFileTypeIcon(filename: string): string {

    if (filename) {

      const filenameArray = filename.split('.');
      const filetype = filenameArray[filenameArray.length - 1];
      switch (filetype) {
        case 'txt':
        case 'rtf':
          return 'fal fa-file-alt';
        case 'ods':
        case 'xls':
        case 'xlsx':
          return 'fal fa-file-excel';
        case 'odt':
        case 'doc':
        case 'docx':
          return 'fal fa-file-word';
        case 'pdf':
          return 'fal fa-file-pdf';
        case 'png':
        case 'tif':
        case 'bmp':
        case 'tiff':
        case 'jpg':
        case 'jpeg':
          return 'fal fa-file-image';
        default:
          return 'fal fa-file';
      }

    } else {

      return 'fal fa-file';
    }
  }

}
