
// const video = document.getElementById('video0');
// console.log('hi')

    async function loadAndPredict(v) {
      const net = await bodyPix.load(/** optional arguments, see below **/);

      /**
       * One of (see documentation below):
       *   - net.segmentPerson
       *   - net.segmentPersonParts
       *   - net.segmentMultiPerson
       *   - net.segmentMultiPersonParts
       * See documentation below for details on each method.
       */
      const segmentation = await net.segmentPerson(v);
      console.log(segmentation);
    }
    // loadAndPredict();