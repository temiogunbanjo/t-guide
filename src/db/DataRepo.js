
class DataRepo {
  static async getDestinationDetails(destinationId) {
    const { data } = require('./destinationlist');
    const response = data.find(aDestination => {
      return destinationId === aDestination.name.replace(/\s+/g, '-').toLowerCase();
    });
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response);
      }, 500)
    })
  }

  static async getGuideDetails(guideUuid) {
    const { data } = require('./guideslist');
    const response = data.find(aGuide => {
      return guideUuid === aGuide.uuid
    });
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response);
      }, 500)
    })
  }
}

export default DataRepo