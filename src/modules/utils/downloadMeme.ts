import domtoimage from 'dom-to-image'

export const handleExportClick = (id: string, fileName: string) => {
  return () => { 
    const contentToExport = document.getElementById(id)
    if (contentToExport) {
      setTimeout(() => {
        domtoimage.toPng(contentToExport)
          .then((dataUrl: string) => {
            const link = document.createElement('a')
            link.download = (fileName.replace(/[^a-zA-Z0-9]/g, '').trim())+'.png'
            link.href = dataUrl
            link.click()
          })
      }, 1)
    }
  }
}