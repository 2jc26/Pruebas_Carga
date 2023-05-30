/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 7396.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 17.0], [2.1, 17.0], [2.2, 17.0], [2.3, 17.0], [2.4, 17.0], [2.5, 17.0], [2.6, 17.0], [2.7, 17.0], [2.8, 17.0], [2.9, 17.0], [3.0, 17.0], [3.1, 17.0], [3.2, 17.0], [3.3, 17.0], [3.4, 17.0], [3.5, 17.0], [3.6, 17.0], [3.7, 17.0], [3.8, 17.0], [3.9, 17.0], [4.0, 77.0], [4.1, 77.0], [4.2, 77.0], [4.3, 77.0], [4.4, 77.0], [4.5, 77.0], [4.6, 77.0], [4.7, 77.0], [4.8, 77.0], [4.9, 77.0], [5.0, 77.0], [5.1, 77.0], [5.2, 77.0], [5.3, 77.0], [5.4, 77.0], [5.5, 77.0], [5.6, 77.0], [5.7, 77.0], [5.8, 77.0], [5.9, 77.0], [6.0, 95.0], [6.1, 95.0], [6.2, 95.0], [6.3, 95.0], [6.4, 95.0], [6.5, 95.0], [6.6, 95.0], [6.7, 95.0], [6.8, 95.0], [6.9, 95.0], [7.0, 95.0], [7.1, 95.0], [7.2, 95.0], [7.3, 95.0], [7.4, 95.0], [7.5, 95.0], [7.6, 95.0], [7.7, 95.0], [7.8, 95.0], [7.9, 95.0], [8.0, 100.0], [8.1, 100.0], [8.2, 100.0], [8.3, 100.0], [8.4, 100.0], [8.5, 100.0], [8.6, 100.0], [8.7, 100.0], [8.8, 100.0], [8.9, 100.0], [9.0, 100.0], [9.1, 100.0], [9.2, 100.0], [9.3, 100.0], [9.4, 100.0], [9.5, 100.0], [9.6, 100.0], [9.7, 100.0], [9.8, 100.0], [9.9, 100.0], [10.0, 102.0], [10.1, 102.0], [10.2, 102.0], [10.3, 102.0], [10.4, 102.0], [10.5, 102.0], [10.6, 102.0], [10.7, 102.0], [10.8, 102.0], [10.9, 102.0], [11.0, 102.0], [11.1, 102.0], [11.2, 102.0], [11.3, 102.0], [11.4, 102.0], [11.5, 102.0], [11.6, 102.0], [11.7, 102.0], [11.8, 102.0], [11.9, 102.0], [12.0, 1908.0], [12.1, 1908.0], [12.2, 1908.0], [12.3, 1908.0], [12.4, 1908.0], [12.5, 1908.0], [12.6, 1908.0], [12.7, 1908.0], [12.8, 1908.0], [12.9, 1908.0], [13.0, 1908.0], [13.1, 1908.0], [13.2, 1908.0], [13.3, 1908.0], [13.4, 1908.0], [13.5, 1908.0], [13.6, 1908.0], [13.7, 1908.0], [13.8, 1908.0], [13.9, 1908.0], [14.0, 1985.0], [14.1, 1985.0], [14.2, 1985.0], [14.3, 1985.0], [14.4, 1985.0], [14.5, 1985.0], [14.6, 1985.0], [14.7, 1985.0], [14.8, 1985.0], [14.9, 1985.0], [15.0, 1985.0], [15.1, 1985.0], [15.2, 1985.0], [15.3, 1985.0], [15.4, 1985.0], [15.5, 1985.0], [15.6, 1985.0], [15.7, 1985.0], [15.8, 1985.0], [15.9, 1985.0], [16.0, 2042.0], [16.1, 2042.0], [16.2, 2042.0], [16.3, 2042.0], [16.4, 2042.0], [16.5, 2042.0], [16.6, 2042.0], [16.7, 2042.0], [16.8, 2042.0], [16.9, 2042.0], [17.0, 2042.0], [17.1, 2042.0], [17.2, 2042.0], [17.3, 2042.0], [17.4, 2042.0], [17.5, 2042.0], [17.6, 2042.0], [17.7, 2042.0], [17.8, 2042.0], [17.9, 2042.0], [18.0, 2045.0], [18.1, 2045.0], [18.2, 2045.0], [18.3, 2045.0], [18.4, 2045.0], [18.5, 2045.0], [18.6, 2045.0], [18.7, 2045.0], [18.8, 2045.0], [18.9, 2045.0], [19.0, 2045.0], [19.1, 2045.0], [19.2, 2045.0], [19.3, 2045.0], [19.4, 2045.0], [19.5, 2045.0], [19.6, 2045.0], [19.7, 2045.0], [19.8, 2045.0], [19.9, 2045.0], [20.0, 2045.0], [20.1, 2045.0], [20.2, 2045.0], [20.3, 2045.0], [20.4, 2045.0], [20.5, 2045.0], [20.6, 2045.0], [20.7, 2045.0], [20.8, 2045.0], [20.9, 2045.0], [21.0, 2045.0], [21.1, 2045.0], [21.2, 2045.0], [21.3, 2045.0], [21.4, 2045.0], [21.5, 2045.0], [21.6, 2045.0], [21.7, 2045.0], [21.8, 2045.0], [21.9, 2045.0], [22.0, 2064.0], [22.1, 2064.0], [22.2, 2064.0], [22.3, 2064.0], [22.4, 2064.0], [22.5, 2064.0], [22.6, 2064.0], [22.7, 2064.0], [22.8, 2064.0], [22.9, 2064.0], [23.0, 2064.0], [23.1, 2064.0], [23.2, 2064.0], [23.3, 2064.0], [23.4, 2064.0], [23.5, 2064.0], [23.6, 2064.0], [23.7, 2064.0], [23.8, 2064.0], [23.9, 2064.0], [24.0, 2111.0], [24.1, 2111.0], [24.2, 2111.0], [24.3, 2111.0], [24.4, 2111.0], [24.5, 2111.0], [24.6, 2111.0], [24.7, 2111.0], [24.8, 2111.0], [24.9, 2111.0], [25.0, 2111.0], [25.1, 2111.0], [25.2, 2111.0], [25.3, 2111.0], [25.4, 2111.0], [25.5, 2111.0], [25.6, 2111.0], [25.7, 2111.0], [25.8, 2111.0], [25.9, 2111.0], [26.0, 4724.0], [26.1, 4724.0], [26.2, 4724.0], [26.3, 4724.0], [26.4, 4724.0], [26.5, 4724.0], [26.6, 4724.0], [26.7, 4724.0], [26.8, 4724.0], [26.9, 4724.0], [27.0, 4724.0], [27.1, 4724.0], [27.2, 4724.0], [27.3, 4724.0], [27.4, 4724.0], [27.5, 4724.0], [27.6, 4724.0], [27.7, 4724.0], [27.8, 4724.0], [27.9, 4724.0], [28.0, 4801.0], [28.1, 4801.0], [28.2, 4801.0], [28.3, 4801.0], [28.4, 4801.0], [28.5, 4801.0], [28.6, 4801.0], [28.7, 4801.0], [28.8, 4801.0], [28.9, 4801.0], [29.0, 4801.0], [29.1, 4801.0], [29.2, 4801.0], [29.3, 4801.0], [29.4, 4801.0], [29.5, 4801.0], [29.6, 4801.0], [29.7, 4801.0], [29.8, 4801.0], [29.9, 4801.0], [30.0, 4880.0], [30.1, 4880.0], [30.2, 4880.0], [30.3, 4880.0], [30.4, 4880.0], [30.5, 4880.0], [30.6, 4880.0], [30.7, 4880.0], [30.8, 4880.0], [30.9, 4880.0], [31.0, 4880.0], [31.1, 4880.0], [31.2, 4880.0], [31.3, 4880.0], [31.4, 4880.0], [31.5, 4880.0], [31.6, 4880.0], [31.7, 4880.0], [31.8, 4880.0], [31.9, 4880.0], [32.0, 4959.0], [32.1, 4959.0], [32.2, 4959.0], [32.3, 4959.0], [32.4, 4959.0], [32.5, 4959.0], [32.6, 4959.0], [32.7, 4959.0], [32.8, 4959.0], [32.9, 4959.0], [33.0, 4959.0], [33.1, 4959.0], [33.2, 4959.0], [33.3, 4959.0], [33.4, 4959.0], [33.5, 4959.0], [33.6, 4959.0], [33.7, 4959.0], [33.8, 4959.0], [33.9, 4959.0], [34.0, 5037.0], [34.1, 5037.0], [34.2, 5037.0], [34.3, 5037.0], [34.4, 5037.0], [34.5, 5037.0], [34.6, 5037.0], [34.7, 5037.0], [34.8, 5037.0], [34.9, 5037.0], [35.0, 5037.0], [35.1, 5037.0], [35.2, 5037.0], [35.3, 5037.0], [35.4, 5037.0], [35.5, 5037.0], [35.6, 5037.0], [35.7, 5037.0], [35.8, 5037.0], [35.9, 5037.0], [36.0, 5111.0], [36.1, 5111.0], [36.2, 5111.0], [36.3, 5111.0], [36.4, 5111.0], [36.5, 5111.0], [36.6, 5111.0], [36.7, 5111.0], [36.8, 5111.0], [36.9, 5111.0], [37.0, 5111.0], [37.1, 5111.0], [37.2, 5111.0], [37.3, 5111.0], [37.4, 5111.0], [37.5, 5111.0], [37.6, 5111.0], [37.7, 5111.0], [37.8, 5111.0], [37.9, 5111.0], [38.0, 5184.0], [38.1, 5184.0], [38.2, 5184.0], [38.3, 5184.0], [38.4, 5184.0], [38.5, 5184.0], [38.6, 5184.0], [38.7, 5184.0], [38.8, 5184.0], [38.9, 5184.0], [39.0, 5184.0], [39.1, 5184.0], [39.2, 5184.0], [39.3, 5184.0], [39.4, 5184.0], [39.5, 5184.0], [39.6, 5184.0], [39.7, 5184.0], [39.8, 5184.0], [39.9, 5184.0], [40.0, 5461.0], [40.1, 5461.0], [40.2, 5461.0], [40.3, 5461.0], [40.4, 5461.0], [40.5, 5461.0], [40.6, 5461.0], [40.7, 5461.0], [40.8, 5461.0], [40.9, 5461.0], [41.0, 5461.0], [41.1, 5461.0], [41.2, 5461.0], [41.3, 5461.0], [41.4, 5461.0], [41.5, 5461.0], [41.6, 5461.0], [41.7, 5461.0], [41.8, 5461.0], [41.9, 5461.0], [42.0, 5462.0], [42.1, 5462.0], [42.2, 5462.0], [42.3, 5462.0], [42.4, 5462.0], [42.5, 5462.0], [42.6, 5462.0], [42.7, 5462.0], [42.8, 5462.0], [42.9, 5462.0], [43.0, 5462.0], [43.1, 5462.0], [43.2, 5462.0], [43.3, 5462.0], [43.4, 5462.0], [43.5, 5462.0], [43.6, 5462.0], [43.7, 5462.0], [43.8, 5462.0], [43.9, 5462.0], [44.0, 5540.0], [44.1, 5540.0], [44.2, 5540.0], [44.3, 5540.0], [44.4, 5540.0], [44.5, 5540.0], [44.6, 5540.0], [44.7, 5540.0], [44.8, 5540.0], [44.9, 5540.0], [45.0, 5540.0], [45.1, 5540.0], [45.2, 5540.0], [45.3, 5540.0], [45.4, 5540.0], [45.5, 5540.0], [45.6, 5540.0], [45.7, 5540.0], [45.8, 5540.0], [45.9, 5540.0], [46.0, 5594.0], [46.1, 5594.0], [46.2, 5594.0], [46.3, 5594.0], [46.4, 5594.0], [46.5, 5594.0], [46.6, 5594.0], [46.7, 5594.0], [46.8, 5594.0], [46.9, 5594.0], [47.0, 5594.0], [47.1, 5594.0], [47.2, 5594.0], [47.3, 5594.0], [47.4, 5594.0], [47.5, 5594.0], [47.6, 5594.0], [47.7, 5594.0], [47.8, 5594.0], [47.9, 5594.0], [48.0, 5620.0], [48.1, 5620.0], [48.2, 5620.0], [48.3, 5620.0], [48.4, 5620.0], [48.5, 5620.0], [48.6, 5620.0], [48.7, 5620.0], [48.8, 5620.0], [48.9, 5620.0], [49.0, 5620.0], [49.1, 5620.0], [49.2, 5620.0], [49.3, 5620.0], [49.4, 5620.0], [49.5, 5620.0], [49.6, 5620.0], [49.7, 5620.0], [49.8, 5620.0], [49.9, 5620.0], [50.0, 5672.0], [50.1, 5672.0], [50.2, 5672.0], [50.3, 5672.0], [50.4, 5672.0], [50.5, 5672.0], [50.6, 5672.0], [50.7, 5672.0], [50.8, 5672.0], [50.9, 5672.0], [51.0, 5672.0], [51.1, 5672.0], [51.2, 5672.0], [51.3, 5672.0], [51.4, 5672.0], [51.5, 5672.0], [51.6, 5672.0], [51.7, 5672.0], [51.8, 5672.0], [51.9, 5672.0], [52.0, 5702.0], [52.1, 5702.0], [52.2, 5702.0], [52.3, 5702.0], [52.4, 5702.0], [52.5, 5702.0], [52.6, 5702.0], [52.7, 5702.0], [52.8, 5702.0], [52.9, 5702.0], [53.0, 5702.0], [53.1, 5702.0], [53.2, 5702.0], [53.3, 5702.0], [53.4, 5702.0], [53.5, 5702.0], [53.6, 5702.0], [53.7, 5702.0], [53.8, 5702.0], [53.9, 5702.0], [54.0, 5754.0], [54.1, 5754.0], [54.2, 5754.0], [54.3, 5754.0], [54.4, 5754.0], [54.5, 5754.0], [54.6, 5754.0], [54.7, 5754.0], [54.8, 5754.0], [54.9, 5754.0], [55.0, 5754.0], [55.1, 5754.0], [55.2, 5754.0], [55.3, 5754.0], [55.4, 5754.0], [55.5, 5754.0], [55.6, 5754.0], [55.7, 5754.0], [55.8, 5754.0], [55.9, 5754.0], [56.0, 5779.0], [56.1, 5779.0], [56.2, 5779.0], [56.3, 5779.0], [56.4, 5779.0], [56.5, 5779.0], [56.6, 5779.0], [56.7, 5779.0], [56.8, 5779.0], [56.9, 5779.0], [57.0, 5779.0], [57.1, 5779.0], [57.2, 5779.0], [57.3, 5779.0], [57.4, 5779.0], [57.5, 5779.0], [57.6, 5779.0], [57.7, 5779.0], [57.8, 5779.0], [57.9, 5779.0], [58.0, 5832.0], [58.1, 5832.0], [58.2, 5832.0], [58.3, 5832.0], [58.4, 5832.0], [58.5, 5832.0], [58.6, 5832.0], [58.7, 5832.0], [58.8, 5832.0], [58.9, 5832.0], [59.0, 5832.0], [59.1, 5832.0], [59.2, 5832.0], [59.3, 5832.0], [59.4, 5832.0], [59.5, 5832.0], [59.6, 5832.0], [59.7, 5832.0], [59.8, 5832.0], [59.9, 5832.0], [60.0, 5855.0], [60.1, 5855.0], [60.2, 5855.0], [60.3, 5855.0], [60.4, 5855.0], [60.5, 5855.0], [60.6, 5855.0], [60.7, 5855.0], [60.8, 5855.0], [60.9, 5855.0], [61.0, 5855.0], [61.1, 5855.0], [61.2, 5855.0], [61.3, 5855.0], [61.4, 5855.0], [61.5, 5855.0], [61.6, 5855.0], [61.7, 5855.0], [61.8, 5855.0], [61.9, 5855.0], [62.0, 5913.0], [62.1, 5913.0], [62.2, 5913.0], [62.3, 5913.0], [62.4, 5913.0], [62.5, 5913.0], [62.6, 5913.0], [62.7, 5913.0], [62.8, 5913.0], [62.9, 5913.0], [63.0, 5913.0], [63.1, 5913.0], [63.2, 5913.0], [63.3, 5913.0], [63.4, 5913.0], [63.5, 5913.0], [63.6, 5913.0], [63.7, 5913.0], [63.8, 5913.0], [63.9, 5913.0], [64.0, 5929.0], [64.1, 5929.0], [64.2, 5929.0], [64.3, 5929.0], [64.4, 5929.0], [64.5, 5929.0], [64.6, 5929.0], [64.7, 5929.0], [64.8, 5929.0], [64.9, 5929.0], [65.0, 5929.0], [65.1, 5929.0], [65.2, 5929.0], [65.3, 5929.0], [65.4, 5929.0], [65.5, 5929.0], [65.6, 5929.0], [65.7, 5929.0], [65.8, 5929.0], [65.9, 5929.0], [66.0, 5977.0], [66.1, 5977.0], [66.2, 5977.0], [66.3, 5977.0], [66.4, 5977.0], [66.5, 5977.0], [66.6, 5977.0], [66.7, 5977.0], [66.8, 5977.0], [66.9, 5977.0], [67.0, 5977.0], [67.1, 5977.0], [67.2, 5977.0], [67.3, 5977.0], [67.4, 5977.0], [67.5, 5977.0], [67.6, 5977.0], [67.7, 5977.0], [67.8, 5977.0], [67.9, 5977.0], [68.0, 6004.0], [68.1, 6004.0], [68.2, 6004.0], [68.3, 6004.0], [68.4, 6004.0], [68.5, 6004.0], [68.6, 6004.0], [68.7, 6004.0], [68.8, 6004.0], [68.9, 6004.0], [69.0, 6004.0], [69.1, 6004.0], [69.2, 6004.0], [69.3, 6004.0], [69.4, 6004.0], [69.5, 6004.0], [69.6, 6004.0], [69.7, 6004.0], [69.8, 6004.0], [69.9, 6004.0], [70.0, 6027.0], [70.1, 6027.0], [70.2, 6027.0], [70.3, 6027.0], [70.4, 6027.0], [70.5, 6027.0], [70.6, 6027.0], [70.7, 6027.0], [70.8, 6027.0], [70.9, 6027.0], [71.0, 6027.0], [71.1, 6027.0], [71.2, 6027.0], [71.3, 6027.0], [71.4, 6027.0], [71.5, 6027.0], [71.6, 6027.0], [71.7, 6027.0], [71.8, 6027.0], [71.9, 6027.0], [72.0, 6061.0], [72.1, 6061.0], [72.2, 6061.0], [72.3, 6061.0], [72.4, 6061.0], [72.5, 6061.0], [72.6, 6061.0], [72.7, 6061.0], [72.8, 6061.0], [72.9, 6061.0], [73.0, 6061.0], [73.1, 6061.0], [73.2, 6061.0], [73.3, 6061.0], [73.4, 6061.0], [73.5, 6061.0], [73.6, 6061.0], [73.7, 6061.0], [73.8, 6061.0], [73.9, 6061.0], [74.0, 6081.0], [74.1, 6081.0], [74.2, 6081.0], [74.3, 6081.0], [74.4, 6081.0], [74.5, 6081.0], [74.6, 6081.0], [74.7, 6081.0], [74.8, 6081.0], [74.9, 6081.0], [75.0, 6081.0], [75.1, 6081.0], [75.2, 6081.0], [75.3, 6081.0], [75.4, 6081.0], [75.5, 6081.0], [75.6, 6081.0], [75.7, 6081.0], [75.8, 6081.0], [75.9, 6081.0], [76.0, 6105.0], [76.1, 6105.0], [76.2, 6105.0], [76.3, 6105.0], [76.4, 6105.0], [76.5, 6105.0], [76.6, 6105.0], [76.7, 6105.0], [76.8, 6105.0], [76.9, 6105.0], [77.0, 6105.0], [77.1, 6105.0], [77.2, 6105.0], [77.3, 6105.0], [77.4, 6105.0], [77.5, 6105.0], [77.6, 6105.0], [77.7, 6105.0], [77.8, 6105.0], [77.9, 6105.0], [78.0, 6158.0], [78.1, 6158.0], [78.2, 6158.0], [78.3, 6158.0], [78.4, 6158.0], [78.5, 6158.0], [78.6, 6158.0], [78.7, 6158.0], [78.8, 6158.0], [78.9, 6158.0], [79.0, 6158.0], [79.1, 6158.0], [79.2, 6158.0], [79.3, 6158.0], [79.4, 6158.0], [79.5, 6158.0], [79.6, 6158.0], [79.7, 6158.0], [79.8, 6158.0], [79.9, 6158.0], [80.0, 6183.0], [80.1, 6183.0], [80.2, 6183.0], [80.3, 6183.0], [80.4, 6183.0], [80.5, 6183.0], [80.6, 6183.0], [80.7, 6183.0], [80.8, 6183.0], [80.9, 6183.0], [81.0, 6183.0], [81.1, 6183.0], [81.2, 6183.0], [81.3, 6183.0], [81.4, 6183.0], [81.5, 6183.0], [81.6, 6183.0], [81.7, 6183.0], [81.8, 6183.0], [81.9, 6183.0], [82.0, 6237.0], [82.1, 6237.0], [82.2, 6237.0], [82.3, 6237.0], [82.4, 6237.0], [82.5, 6237.0], [82.6, 6237.0], [82.7, 6237.0], [82.8, 6237.0], [82.9, 6237.0], [83.0, 6237.0], [83.1, 6237.0], [83.2, 6237.0], [83.3, 6237.0], [83.4, 6237.0], [83.5, 6237.0], [83.6, 6237.0], [83.7, 6237.0], [83.8, 6237.0], [83.9, 6237.0], [84.0, 6253.0], [84.1, 6253.0], [84.2, 6253.0], [84.3, 6253.0], [84.4, 6253.0], [84.5, 6253.0], [84.6, 6253.0], [84.7, 6253.0], [84.8, 6253.0], [84.9, 6253.0], [85.0, 6253.0], [85.1, 6253.0], [85.2, 6253.0], [85.3, 6253.0], [85.4, 6253.0], [85.5, 6253.0], [85.6, 6253.0], [85.7, 6253.0], [85.8, 6253.0], [85.9, 6253.0], [86.0, 6933.0], [86.1, 6933.0], [86.2, 6933.0], [86.3, 6933.0], [86.4, 6933.0], [86.5, 6933.0], [86.6, 6933.0], [86.7, 6933.0], [86.8, 6933.0], [86.9, 6933.0], [87.0, 6933.0], [87.1, 6933.0], [87.2, 6933.0], [87.3, 6933.0], [87.4, 6933.0], [87.5, 6933.0], [87.6, 6933.0], [87.7, 6933.0], [87.8, 6933.0], [87.9, 6933.0], [88.0, 7014.0], [88.1, 7014.0], [88.2, 7014.0], [88.3, 7014.0], [88.4, 7014.0], [88.5, 7014.0], [88.6, 7014.0], [88.7, 7014.0], [88.8, 7014.0], [88.9, 7014.0], [89.0, 7014.0], [89.1, 7014.0], [89.2, 7014.0], [89.3, 7014.0], [89.4, 7014.0], [89.5, 7014.0], [89.6, 7014.0], [89.7, 7014.0], [89.8, 7014.0], [89.9, 7014.0], [90.0, 7092.0], [90.1, 7092.0], [90.2, 7092.0], [90.3, 7092.0], [90.4, 7092.0], [90.5, 7092.0], [90.6, 7092.0], [90.7, 7092.0], [90.8, 7092.0], [90.9, 7092.0], [91.0, 7092.0], [91.1, 7092.0], [91.2, 7092.0], [91.3, 7092.0], [91.4, 7092.0], [91.5, 7092.0], [91.6, 7092.0], [91.7, 7092.0], [91.8, 7092.0], [91.9, 7092.0], [92.0, 7172.0], [92.1, 7172.0], [92.2, 7172.0], [92.3, 7172.0], [92.4, 7172.0], [92.5, 7172.0], [92.6, 7172.0], [92.7, 7172.0], [92.8, 7172.0], [92.9, 7172.0], [93.0, 7172.0], [93.1, 7172.0], [93.2, 7172.0], [93.3, 7172.0], [93.4, 7172.0], [93.5, 7172.0], [93.6, 7172.0], [93.7, 7172.0], [93.8, 7172.0], [93.9, 7172.0], [94.0, 7248.0], [94.1, 7248.0], [94.2, 7248.0], [94.3, 7248.0], [94.4, 7248.0], [94.5, 7248.0], [94.6, 7248.0], [94.7, 7248.0], [94.8, 7248.0], [94.9, 7248.0], [95.0, 7248.0], [95.1, 7248.0], [95.2, 7248.0], [95.3, 7248.0], [95.4, 7248.0], [95.5, 7248.0], [95.6, 7248.0], [95.7, 7248.0], [95.8, 7248.0], [95.9, 7248.0], [96.0, 7324.0], [96.1, 7324.0], [96.2, 7324.0], [96.3, 7324.0], [96.4, 7324.0], [96.5, 7324.0], [96.6, 7324.0], [96.7, 7324.0], [96.8, 7324.0], [96.9, 7324.0], [97.0, 7324.0], [97.1, 7324.0], [97.2, 7324.0], [97.3, 7324.0], [97.4, 7324.0], [97.5, 7324.0], [97.6, 7324.0], [97.7, 7324.0], [97.8, 7324.0], [97.9, 7324.0], [98.0, 7396.0], [98.1, 7396.0], [98.2, 7396.0], [98.3, 7396.0], [98.4, 7396.0], [98.5, 7396.0], [98.6, 7396.0], [98.7, 7396.0], [98.8, 7396.0], [98.9, 7396.0], [99.0, 7396.0], [99.1, 7396.0], [99.2, 7396.0], [99.3, 7396.0], [99.4, 7396.0], [99.5, 7396.0], [99.6, 7396.0], [99.7, 7396.0], [99.8, 7396.0], [99.9, 7396.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4.0, "series": [{"data": [[0.0, 4.0], [2100.0, 1.0], [4800.0, 2.0], [4700.0, 1.0], [5100.0, 2.0], [4900.0, 1.0], [5000.0, 1.0], [5400.0, 2.0], [5600.0, 2.0], [5500.0, 2.0], [5700.0, 3.0], [5800.0, 2.0], [5900.0, 3.0], [6100.0, 3.0], [6000.0, 4.0], [6200.0, 2.0], [100.0, 2.0], [6900.0, 1.0], [7000.0, 2.0], [7100.0, 1.0], [7300.0, 2.0], [7200.0, 1.0], [1900.0, 2.0], [2000.0, 4.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 44.0, "series": [{"data": [[0.0, 6.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 44.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 21.76, "minX": 1.6854429E12, "maxY": 21.76, "series": [{"data": [[1.6854429E12, 21.76]], "isOverall": false, "label": "Prueba_Rendimiento", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6854429E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 101.0, "minX": 2.0, "maxY": 7322.0, "series": [{"data": [[33.0, 4958.5], [32.0, 4801.0], [2.0, 7014.0], [35.0, 5111.0], [37.0, 5462.0], [36.0, 5071.5], [38.0, 1985.0], [41.0, 2111.0], [40.0, 1986.0], [43.0, 2045.0], [44.0, 2042.0], [3.0, 7052.5], [5.0, 7208.0], [7.0, 7322.0], [8.0, 5754.0], [9.0, 5913.0], [10.0, 5594.0], [11.0, 5672.0], [12.0, 1981.3333333333333], [13.0, 101.0], [14.0, 6019.0], [15.0, 6158.0], [16.0, 2027.3333333333333], [17.0, 6081.0], [18.0, 6237.0], [20.0, 6066.0], [22.0, 6218.0], [23.0, 5702.0], [25.0, 5500.5], [27.0, 5737.5], [29.0, 5854.0], [30.0, 4724.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[21.76, 4693.32]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 44.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 100.0, "minX": 1.6854429E12, "maxY": 4557.5, "series": [{"data": [[1.6854429E12, 4557.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6854429E12, 100.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6854429E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 4693.32, "minX": 1.6854429E12, "maxY": 4693.32, "series": [{"data": [[1.6854429E12, 4693.32]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6854429E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 4692.800000000002, "minX": 1.6854429E12, "maxY": 4692.800000000002, "series": [{"data": [[1.6854429E12, 4692.800000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6854429E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 5.04, "minX": 1.6854429E12, "maxY": 5.04, "series": [{"data": [[1.6854429E12, 5.04]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6854429E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.6854429E12, "maxY": 7396.0, "series": [{"data": [[1.6854429E12, 7396.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6854429E12, 7084.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6854429E12, 7396.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6854429E12, 7282.2]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6854429E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6854429E12, 5646.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6854429E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 39.0, "minX": 2.0, "maxY": 5921.0, "series": [{"data": [[4.0, 97.5], [2.0, 39.0], [8.0, 4998.0], [22.0, 5921.0], [7.0, 4522.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 39.0, "minX": 2.0, "maxY": 5921.0, "series": [{"data": [[4.0, 91.5], [2.0, 39.0], [8.0, 4998.0], [22.0, 5921.0], [7.0, 4522.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.6854429E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.6854429E12, 0.8333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6854429E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.6854429E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.6854429E12, 0.8333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6854429E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.6854429E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.6854429E12, 0.8333333333333334]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6854429E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.6854429E12, "maxY": 0.8333333333333334, "series": [{"data": [[1.6854429E12, 0.8333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6854429E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

