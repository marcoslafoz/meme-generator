import domtoimage from 'dom-to-image'

export const handleExportClick = (id: string, fileName: string) => {
  return () => { // Envuelve la función en otra función para manejar el evento
    const contentToExport = document.getElementById(id)
    if (contentToExport) {
      setTimeout(() => {
        domtoimage.toPng(contentToExport)
          .then((dataUrl: string) => {
            const link = document.createElement('a')
            link.download = fileName
            link.href = dataUrl
            link.click()
          })
      }, 1)
    }
  };
}