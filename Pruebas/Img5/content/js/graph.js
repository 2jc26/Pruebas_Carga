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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 7550.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 2.0], [1.1, 2.0], [1.2, 2.0], [1.3, 2.0], [1.4, 2.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 3.0], [2.5, 4.0], [2.6, 4.0], [2.7, 4.0], [2.8, 4.0], [2.9, 4.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 18.0], [4.6, 18.0], [4.7, 18.0], [4.8, 18.0], [4.9, 18.0], [5.0, 27.0], [5.1, 27.0], [5.2, 27.0], [5.3, 27.0], [5.4, 27.0], [5.5, 30.0], [5.6, 30.0], [5.7, 30.0], [5.8, 30.0], [5.9, 30.0], [6.0, 34.0], [6.1, 34.0], [6.2, 34.0], [6.3, 34.0], [6.4, 34.0], [6.5, 35.0], [6.6, 35.0], [6.7, 35.0], [6.8, 35.0], [6.9, 35.0], [7.0, 48.0], [7.1, 48.0], [7.2, 48.0], [7.3, 48.0], [7.4, 48.0], [7.5, 48.0], [7.6, 48.0], [7.7, 48.0], [7.8, 48.0], [7.9, 48.0], [8.0, 48.0], [8.1, 48.0], [8.2, 48.0], [8.3, 48.0], [8.4, 48.0], [8.5, 48.0], [8.6, 48.0], [8.7, 48.0], [8.8, 48.0], [8.9, 48.0], [9.0, 50.0], [9.1, 50.0], [9.2, 50.0], [9.3, 50.0], [9.4, 50.0], [9.5, 51.0], [9.6, 51.0], [9.7, 51.0], [9.8, 51.0], [9.9, 51.0], [10.0, 51.0], [10.1, 51.0], [10.2, 51.0], [10.3, 51.0], [10.4, 51.0], [10.5, 51.0], [10.6, 51.0], [10.7, 51.0], [10.8, 51.0], [10.9, 51.0], [11.0, 54.0], [11.1, 54.0], [11.2, 54.0], [11.3, 54.0], [11.4, 54.0], [11.5, 54.0], [11.6, 54.0], [11.7, 54.0], [11.8, 54.0], [11.9, 54.0], [12.0, 55.0], [12.1, 55.0], [12.2, 55.0], [12.3, 55.0], [12.4, 55.0], [12.5, 55.0], [12.6, 55.0], [12.7, 55.0], [12.8, 55.0], [12.9, 55.0], [13.0, 55.0], [13.1, 55.0], [13.2, 55.0], [13.3, 55.0], [13.4, 55.0], [13.5, 56.0], [13.6, 56.0], [13.7, 56.0], [13.8, 56.0], [13.9, 56.0], [14.0, 56.0], [14.1, 56.0], [14.2, 56.0], [14.3, 56.0], [14.4, 56.0], [14.5, 57.0], [14.6, 57.0], [14.7, 57.0], [14.8, 57.0], [14.9, 57.0], [15.0, 57.0], [15.1, 57.0], [15.2, 57.0], [15.3, 57.0], [15.4, 57.0], [15.5, 57.0], [15.6, 57.0], [15.7, 57.0], [15.8, 57.0], [15.9, 57.0], [16.0, 57.0], [16.1, 57.0], [16.2, 57.0], [16.3, 57.0], [16.4, 57.0], [16.5, 60.0], [16.6, 60.0], [16.7, 60.0], [16.8, 60.0], [16.9, 60.0], [17.0, 61.0], [17.1, 61.0], [17.2, 61.0], [17.3, 61.0], [17.4, 61.0], [17.5, 61.0], [17.6, 61.0], [17.7, 61.0], [17.8, 61.0], [17.9, 61.0], [18.0, 62.0], [18.1, 62.0], [18.2, 62.0], [18.3, 62.0], [18.4, 62.0], [18.5, 62.0], [18.6, 62.0], [18.7, 62.0], [18.8, 62.0], [18.9, 62.0], [19.0, 62.0], [19.1, 62.0], [19.2, 62.0], [19.3, 62.0], [19.4, 62.0], [19.5, 63.0], [19.6, 63.0], [19.7, 63.0], [19.8, 63.0], [19.9, 63.0], [20.0, 65.0], [20.1, 65.0], [20.2, 65.0], [20.3, 65.0], [20.4, 65.0], [20.5, 66.0], [20.6, 66.0], [20.7, 66.0], [20.8, 66.0], [20.9, 66.0], [21.0, 67.0], [21.1, 67.0], [21.2, 67.0], [21.3, 67.0], [21.4, 67.0], [21.5, 70.0], [21.6, 70.0], [21.7, 70.0], [21.8, 70.0], [21.9, 70.0], [22.0, 76.0], [22.1, 76.0], [22.2, 76.0], [22.3, 76.0], [22.4, 76.0], [22.5, 2348.0], [22.6, 2348.0], [22.7, 2348.0], [22.8, 2348.0], [22.9, 2348.0], [23.0, 2355.0], [23.1, 2355.0], [23.2, 2355.0], [23.3, 2355.0], [23.4, 2355.0], [23.5, 2375.0], [23.6, 2375.0], [23.7, 2375.0], [23.8, 2375.0], [23.9, 2375.0], [24.0, 2397.0], [24.1, 2397.0], [24.2, 2397.0], [24.3, 2397.0], [24.4, 2397.0], [24.5, 2414.0], [24.6, 2414.0], [24.7, 2414.0], [24.8, 2414.0], [24.9, 2414.0], [25.0, 2434.0], [25.1, 2434.0], [25.2, 2434.0], [25.3, 2434.0], [25.4, 2434.0], [25.5, 2447.0], [25.6, 2447.0], [25.7, 2447.0], [25.8, 2447.0], [25.9, 2447.0], [26.0, 2476.0], [26.1, 2476.0], [26.2, 2476.0], [26.3, 2476.0], [26.4, 2476.0], [26.5, 2506.0], [26.6, 2506.0], [26.7, 2506.0], [26.8, 2506.0], [26.9, 2506.0], [27.0, 2525.0], [27.1, 2525.0], [27.2, 2525.0], [27.3, 2525.0], [27.4, 2525.0], [27.5, 2545.0], [27.6, 2545.0], [27.7, 2545.0], [27.8, 2545.0], [27.9, 2545.0], [28.0, 2568.0], [28.1, 2568.0], [28.2, 2568.0], [28.3, 2568.0], [28.4, 2568.0], [28.5, 2586.0], [28.6, 2586.0], [28.7, 2586.0], [28.8, 2586.0], [28.9, 2586.0], [29.0, 2609.0], [29.1, 2609.0], [29.2, 2609.0], [29.3, 2609.0], [29.4, 2609.0], [29.5, 2626.0], [29.6, 2626.0], [29.7, 2626.0], [29.8, 2626.0], [29.9, 2626.0], [30.0, 2645.0], [30.1, 2645.0], [30.2, 2645.0], [30.3, 2645.0], [30.4, 2645.0], [30.5, 2666.0], [30.6, 2666.0], [30.7, 2666.0], [30.8, 2666.0], [30.9, 2666.0], [31.0, 2675.0], [31.1, 2675.0], [31.2, 2675.0], [31.3, 2675.0], [31.4, 2675.0], [31.5, 2676.0], [31.6, 2676.0], [31.7, 2676.0], [31.8, 2676.0], [31.9, 2676.0], [32.0, 2689.0], [32.1, 2689.0], [32.2, 2689.0], [32.3, 2689.0], [32.4, 2689.0], [32.5, 2695.0], [32.6, 2695.0], [32.7, 2695.0], [32.8, 2695.0], [32.9, 2695.0], [33.0, 2696.0], [33.1, 2696.0], [33.2, 2696.0], [33.3, 2696.0], [33.4, 2696.0], [33.5, 2704.0], [33.6, 2704.0], [33.7, 2704.0], [33.8, 2704.0], [33.9, 2704.0], [34.0, 2710.0], [34.1, 2710.0], [34.2, 2710.0], [34.3, 2710.0], [34.4, 2710.0], [34.5, 2713.0], [34.6, 2713.0], [34.7, 2713.0], [34.8, 2713.0], [34.9, 2713.0], [35.0, 2734.0], [35.1, 2734.0], [35.2, 2734.0], [35.3, 2734.0], [35.4, 2734.0], [35.5, 2735.0], [35.6, 2735.0], [35.7, 2735.0], [35.8, 2735.0], [35.9, 2735.0], [36.0, 2747.0], [36.1, 2747.0], [36.2, 2747.0], [36.3, 2747.0], [36.4, 2747.0], [36.5, 2748.0], [36.6, 2748.0], [36.7, 2748.0], [36.8, 2748.0], [36.9, 2748.0], [37.0, 2753.0], [37.1, 2753.0], [37.2, 2753.0], [37.3, 2753.0], [37.4, 2753.0], [37.5, 2788.0], [37.6, 2788.0], [37.7, 2788.0], [37.8, 2788.0], [37.9, 2788.0], [38.0, 2791.0], [38.1, 2791.0], [38.2, 2791.0], [38.3, 2791.0], [38.4, 2791.0], [38.5, 2794.0], [38.6, 2794.0], [38.7, 2794.0], [38.8, 2794.0], [38.9, 2794.0], [39.0, 2794.0], [39.1, 2794.0], [39.2, 2794.0], [39.3, 2794.0], [39.4, 2794.0], [39.5, 2796.0], [39.6, 2796.0], [39.7, 2796.0], [39.8, 2796.0], [39.9, 2796.0], [40.0, 2796.0], [40.1, 2796.0], [40.2, 2796.0], [40.3, 2796.0], [40.4, 2796.0], [40.5, 2797.0], [40.6, 2797.0], [40.7, 2797.0], [40.8, 2797.0], [40.9, 2797.0], [41.0, 2798.0], [41.1, 2798.0], [41.2, 2798.0], [41.3, 2798.0], [41.4, 2798.0], [41.5, 2799.0], [41.6, 2799.0], [41.7, 2799.0], [41.8, 2799.0], [41.9, 2799.0], [42.0, 2800.0], [42.1, 2800.0], [42.2, 2800.0], [42.3, 2800.0], [42.4, 2800.0], [42.5, 2800.0], [42.6, 2800.0], [42.7, 2800.0], [42.8, 2800.0], [42.9, 2800.0], [43.0, 2802.0], [43.1, 2802.0], [43.2, 2802.0], [43.3, 2802.0], [43.4, 2802.0], [43.5, 2802.0], [43.6, 2802.0], [43.7, 2802.0], [43.8, 2802.0], [43.9, 2802.0], [44.0, 2803.0], [44.1, 2803.0], [44.2, 2803.0], [44.3, 2803.0], [44.4, 2803.0], [44.5, 2803.0], [44.6, 2803.0], [44.7, 2803.0], [44.8, 2803.0], [44.9, 2803.0], [45.0, 2805.0], [45.1, 2805.0], [45.2, 2805.0], [45.3, 2805.0], [45.4, 2805.0], [45.5, 2805.0], [45.6, 2805.0], [45.7, 2805.0], [45.8, 2805.0], [45.9, 2805.0], [46.0, 2805.0], [46.1, 2805.0], [46.2, 2805.0], [46.3, 2805.0], [46.4, 2805.0], [46.5, 2805.0], [46.6, 2805.0], [46.7, 2805.0], [46.8, 2805.0], [46.9, 2805.0], [47.0, 2805.0], [47.1, 2805.0], [47.2, 2805.0], [47.3, 2805.0], [47.4, 2805.0], [47.5, 2806.0], [47.6, 2806.0], [47.7, 2806.0], [47.8, 2806.0], [47.9, 2806.0], [48.0, 2807.0], [48.1, 2807.0], [48.2, 2807.0], [48.3, 2807.0], [48.4, 2807.0], [48.5, 2809.0], [48.6, 2809.0], [48.7, 2809.0], [48.8, 2809.0], [48.9, 2809.0], [49.0, 2809.0], [49.1, 2809.0], [49.2, 2809.0], [49.3, 2809.0], [49.4, 2809.0], [49.5, 2812.0], [49.6, 2812.0], [49.7, 2812.0], [49.8, 2812.0], [49.9, 2812.0], [50.0, 4816.0], [50.1, 4816.0], [50.2, 4816.0], [50.3, 4816.0], [50.4, 4816.0], [50.5, 4831.0], [50.6, 4831.0], [50.7, 4831.0], [50.8, 4831.0], [50.9, 4831.0], [51.0, 4850.0], [51.1, 4850.0], [51.2, 4850.0], [51.3, 4850.0], [51.4, 4850.0], [51.5, 4851.0], [51.6, 4851.0], [51.7, 4851.0], [51.8, 4851.0], [51.9, 4851.0], [52.0, 4877.0], [52.1, 4877.0], [52.2, 4877.0], [52.3, 4877.0], [52.4, 4877.0], [52.5, 4880.0], [52.6, 4880.0], [52.7, 4880.0], [52.8, 4880.0], [52.9, 4880.0], [53.0, 4891.0], [53.1, 4891.0], [53.2, 4891.0], [53.3, 4891.0], [53.4, 4891.0], [53.5, 4900.0], [53.6, 4900.0], [53.7, 4900.0], [53.8, 4900.0], [53.9, 4900.0], [54.0, 4908.0], [54.1, 4908.0], [54.2, 4908.0], [54.3, 4908.0], [54.4, 4908.0], [54.5, 4916.0], [54.6, 4916.0], [54.7, 4916.0], [54.8, 4916.0], [54.9, 4916.0], [55.0, 4919.0], [55.1, 4919.0], [55.2, 4919.0], [55.3, 4919.0], [55.4, 4919.0], [55.5, 4925.0], [55.6, 4925.0], [55.7, 4925.0], [55.8, 4925.0], [55.9, 4925.0], [56.0, 4935.0], [56.1, 4935.0], [56.2, 4935.0], [56.3, 4935.0], [56.4, 4935.0], [56.5, 4946.0], [56.6, 4946.0], [56.7, 4946.0], [56.8, 4946.0], [56.9, 4946.0], [57.0, 4947.0], [57.1, 4947.0], [57.2, 4947.0], [57.3, 4947.0], [57.4, 4947.0], [57.5, 4961.0], [57.6, 4961.0], [57.7, 4961.0], [57.8, 4961.0], [57.9, 4961.0], [58.0, 4966.0], [58.1, 4966.0], [58.2, 4966.0], [58.3, 4966.0], [58.4, 4966.0], [58.5, 4975.0], [58.6, 4975.0], [58.7, 4975.0], [58.8, 4975.0], [58.9, 4975.0], [59.0, 4980.0], [59.1, 4980.0], [59.2, 4980.0], [59.3, 4980.0], [59.4, 4980.0], [59.5, 4986.0], [59.6, 4986.0], [59.7, 4986.0], [59.8, 4986.0], [59.9, 4986.0], [60.0, 4994.0], [60.1, 4994.0], [60.2, 4994.0], [60.3, 4994.0], [60.4, 4994.0], [60.5, 4999.0], [60.6, 4999.0], [60.7, 4999.0], [60.8, 4999.0], [60.9, 4999.0], [61.0, 5004.0], [61.1, 5004.0], [61.2, 5004.0], [61.3, 5004.0], [61.4, 5004.0], [61.5, 5009.0], [61.6, 5009.0], [61.7, 5009.0], [61.8, 5009.0], [61.9, 5009.0], [62.0, 5009.0], [62.1, 5009.0], [62.2, 5009.0], [62.3, 5009.0], [62.4, 5009.0], [62.5, 5020.0], [62.6, 5020.0], [62.7, 5020.0], [62.8, 5020.0], [62.9, 5020.0], [63.0, 5025.0], [63.1, 5025.0], [63.2, 5025.0], [63.3, 5025.0], [63.4, 5025.0], [63.5, 5028.0], [63.6, 5028.0], [63.7, 5028.0], [63.8, 5028.0], [63.9, 5028.0], [64.0, 5041.0], [64.1, 5041.0], [64.2, 5041.0], [64.3, 5041.0], [64.4, 5041.0], [64.5, 5045.0], [64.6, 5045.0], [64.7, 5045.0], [64.8, 5045.0], [64.9, 5045.0], [65.0, 5047.0], [65.1, 5047.0], [65.2, 5047.0], [65.3, 5047.0], [65.4, 5047.0], [65.5, 5047.0], [65.6, 5047.0], [65.7, 5047.0], [65.8, 5047.0], [65.9, 5047.0], [66.0, 5059.0], [66.1, 5059.0], [66.2, 5059.0], [66.3, 5059.0], [66.4, 5059.0], [66.5, 5072.0], [66.6, 5072.0], [66.7, 5072.0], [66.8, 5072.0], [66.9, 5072.0], [67.0, 5074.0], [67.1, 5074.0], [67.2, 5074.0], [67.3, 5074.0], [67.4, 5074.0], [67.5, 5079.0], [67.6, 5079.0], [67.7, 5079.0], [67.8, 5079.0], [67.9, 5079.0], [68.0, 5084.0], [68.1, 5084.0], [68.2, 5084.0], [68.3, 5084.0], [68.4, 5084.0], [68.5, 5086.0], [68.6, 5086.0], [68.7, 5086.0], [68.8, 5086.0], [68.9, 5086.0], [69.0, 5089.0], [69.1, 5089.0], [69.2, 5089.0], [69.3, 5089.0], [69.4, 5089.0], [69.5, 5106.0], [69.6, 5106.0], [69.7, 5106.0], [69.8, 5106.0], [69.9, 5106.0], [70.0, 5106.0], [70.1, 5106.0], [70.2, 5106.0], [70.3, 5106.0], [70.4, 5106.0], [70.5, 5119.0], [70.6, 5119.0], [70.7, 5119.0], [70.8, 5119.0], [70.9, 5119.0], [71.0, 5119.0], [71.1, 5119.0], [71.2, 5119.0], [71.3, 5119.0], [71.4, 5119.0], [71.5, 5122.0], [71.6, 5122.0], [71.7, 5122.0], [71.8, 5122.0], [71.9, 5122.0], [72.0, 5138.0], [72.1, 5138.0], [72.2, 5138.0], [72.3, 5138.0], [72.4, 5138.0], [72.5, 5139.0], [72.6, 5139.0], [72.7, 5139.0], [72.8, 5139.0], [72.9, 5139.0], [73.0, 5140.0], [73.1, 5140.0], [73.2, 5140.0], [73.3, 5140.0], [73.4, 5140.0], [73.5, 5152.0], [73.6, 5152.0], [73.7, 5152.0], [73.8, 5152.0], [73.9, 5152.0], [74.0, 5160.0], [74.1, 5160.0], [74.2, 5160.0], [74.3, 5160.0], [74.4, 5160.0], [74.5, 5176.0], [74.6, 5176.0], [74.7, 5176.0], [74.8, 5176.0], [74.9, 5176.0], [75.0, 5178.0], [75.1, 5178.0], [75.2, 5178.0], [75.3, 5178.0], [75.4, 5178.0], [75.5, 5178.0], [75.6, 5178.0], [75.7, 5178.0], [75.8, 5178.0], [75.9, 5178.0], [76.0, 5180.0], [76.1, 5180.0], [76.2, 5180.0], [76.3, 5180.0], [76.4, 5180.0], [76.5, 5189.0], [76.6, 5189.0], [76.7, 5189.0], [76.8, 5189.0], [76.9, 5189.0], [77.0, 5190.0], [77.1, 5190.0], [77.2, 5190.0], [77.3, 5190.0], [77.4, 5190.0], [77.5, 5190.0], [77.6, 5190.0], [77.7, 5190.0], [77.8, 5190.0], [77.9, 5190.0], [78.0, 5201.0], [78.1, 5201.0], [78.2, 5201.0], [78.3, 5201.0], [78.4, 5201.0], [78.5, 5204.0], [78.6, 5204.0], [78.7, 5204.0], [78.8, 5204.0], [78.9, 5204.0], [79.0, 5215.0], [79.1, 5215.0], [79.2, 5215.0], [79.3, 5215.0], [79.4, 5215.0], [79.5, 5216.0], [79.6, 5216.0], [79.7, 5216.0], [79.8, 5216.0], [79.9, 5216.0], [80.0, 5218.0], [80.1, 5218.0], [80.2, 5218.0], [80.3, 5218.0], [80.4, 5218.0], [80.5, 5223.0], [80.6, 5223.0], [80.7, 5223.0], [80.8, 5223.0], [80.9, 5223.0], [81.0, 5231.0], [81.1, 5231.0], [81.2, 5231.0], [81.3, 5231.0], [81.4, 5231.0], [81.5, 5239.0], [81.6, 5239.0], [81.7, 5239.0], [81.8, 5239.0], [81.9, 5239.0], [82.0, 5239.0], [82.1, 5239.0], [82.2, 5239.0], [82.3, 5239.0], [82.4, 5239.0], [82.5, 5257.0], [82.6, 5257.0], [82.7, 5257.0], [82.8, 5257.0], [82.9, 5257.0], [83.0, 5267.0], [83.1, 5267.0], [83.2, 5267.0], [83.3, 5267.0], [83.4, 5267.0], [83.5, 5273.0], [83.6, 5273.0], [83.7, 5273.0], [83.8, 5273.0], [83.9, 5273.0], [84.0, 5274.0], [84.1, 5274.0], [84.2, 5274.0], [84.3, 5274.0], [84.4, 5274.0], [84.5, 5281.0], [84.6, 5281.0], [84.7, 5281.0], [84.8, 5281.0], [84.9, 5281.0], [85.0, 5291.0], [85.1, 5291.0], [85.2, 5291.0], [85.3, 5291.0], [85.4, 5291.0], [85.5, 5296.0], [85.6, 5296.0], [85.7, 5296.0], [85.8, 5296.0], [85.9, 5296.0], [86.0, 5301.0], [86.1, 5301.0], [86.2, 5301.0], [86.3, 5301.0], [86.4, 5301.0], [86.5, 5316.0], [86.6, 5316.0], [86.7, 5316.0], [86.8, 5316.0], [86.9, 5316.0], [87.0, 5321.0], [87.1, 5321.0], [87.2, 5321.0], [87.3, 5321.0], [87.4, 5321.0], [87.5, 5323.0], [87.6, 5323.0], [87.7, 5323.0], [87.8, 5323.0], [87.9, 5323.0], [88.0, 5334.0], [88.1, 5334.0], [88.2, 5334.0], [88.3, 5334.0], [88.4, 5334.0], [88.5, 5335.0], [88.6, 5335.0], [88.7, 5335.0], [88.8, 5335.0], [88.9, 5335.0], [89.0, 5344.0], [89.1, 5344.0], [89.2, 5344.0], [89.3, 5344.0], [89.4, 5344.0], [89.5, 5355.0], [89.6, 5355.0], [89.7, 5355.0], [89.8, 5355.0], [89.9, 5355.0], [90.0, 5355.0], [90.1, 5355.0], [90.2, 5355.0], [90.3, 5355.0], [90.4, 5355.0], [90.5, 5372.0], [90.6, 5372.0], [90.7, 5372.0], [90.8, 5372.0], [90.9, 5372.0], [91.0, 5374.0], [91.1, 5374.0], [91.2, 5374.0], [91.3, 5374.0], [91.4, 5374.0], [91.5, 5383.0], [91.6, 5383.0], [91.7, 5383.0], [91.8, 5383.0], [91.9, 5383.0], [92.0, 5385.0], [92.1, 5385.0], [92.2, 5385.0], [92.3, 5385.0], [92.4, 5385.0], [92.5, 5395.0], [92.6, 5395.0], [92.7, 5395.0], [92.8, 5395.0], [92.9, 5395.0], [93.0, 5395.0], [93.1, 5395.0], [93.2, 5395.0], [93.3, 5395.0], [93.4, 5395.0], [93.5, 5412.0], [93.6, 5412.0], [93.7, 5412.0], [93.8, 5412.0], [93.9, 5412.0], [94.0, 5412.0], [94.1, 5412.0], [94.2, 5412.0], [94.3, 5412.0], [94.4, 5412.0], [94.5, 5422.0], [94.6, 5422.0], [94.7, 5422.0], [94.8, 5422.0], [94.9, 5422.0], [95.0, 5433.0], [95.1, 5433.0], [95.2, 5433.0], [95.3, 5433.0], [95.4, 5433.0], [95.5, 5442.0], [95.6, 5442.0], [95.7, 5442.0], [95.8, 5442.0], [95.9, 5442.0], [96.0, 5456.0], [96.1, 5456.0], [96.2, 5456.0], [96.3, 5456.0], [96.4, 5456.0], [96.5, 5465.0], [96.6, 5465.0], [96.7, 5465.0], [96.8, 5465.0], [96.9, 5465.0], [97.0, 5473.0], [97.1, 5473.0], [97.2, 5473.0], [97.3, 5473.0], [97.4, 5473.0], [97.5, 5480.0], [97.6, 5480.0], [97.7, 5480.0], [97.8, 5480.0], [97.9, 5480.0], [98.0, 7483.0], [98.1, 7483.0], [98.2, 7483.0], [98.3, 7483.0], [98.4, 7483.0], [98.5, 7499.0], [98.6, 7499.0], [98.7, 7499.0], [98.8, 7499.0], [98.9, 7499.0], [99.0, 7520.0], [99.1, 7520.0], [99.2, 7520.0], [99.3, 7520.0], [99.4, 7520.0], [99.5, 7550.0], [99.6, 7550.0], [99.7, 7550.0], [99.8, 7550.0], [99.9, 7550.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 45.0, "series": [{"data": [[0.0, 45.0], [2300.0, 4.0], [2400.0, 4.0], [2500.0, 5.0], [2600.0, 9.0], [2700.0, 17.0], [2800.0, 16.0], [4800.0, 7.0], [5000.0, 17.0], [5100.0, 17.0], [4900.0, 15.0], [5300.0, 15.0], [5200.0, 16.0], [5400.0, 9.0], [7400.0, 2.0], [7500.0, 2.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 155.0, "series": [{"data": [[0.0, 45.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 155.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 77.25500000000005, "minX": 1.68544104E12, "maxY": 77.25500000000005, "series": [{"data": [[1.68544104E12, 77.25500000000005]], "isOverall": false, "label": "Prueba_Rendimiento", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544104E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "maxY": 7550.0, "series": [{"data": [[2.0, 7499.0], [3.0, 7520.0], [4.0, 7550.0], [6.0, 5160.0], [8.0, 5099.0], [10.0, 5099.0], [12.0, 5133.5], [13.0, 5196.5], [14.0, 5223.0], [16.0, 4908.0], [18.0, 4950.0], [19.0, 4978.0], [20.0, 4994.0], [22.0, 5051.0], [24.0, 5275.0], [26.0, 5276.0], [28.0, 5258.5], [30.0, 5347.5], [31.0, 5355.0], [33.0, 5.0], [32.0, 5215.0], [35.0, 3.5], [34.0, 5287.5], [37.0, 5334.0], [36.0, 5254.5], [39.0, 5324.0], [41.0, 5422.5], [43.0, 5370.0], [45.0, 5066.5], [47.0, 5106.0], [49.0, 5308.5], [51.0, 5267.0], [52.0, 5175.0], [54.0, 5287.0], [57.0, 5422.0], [56.0, 5353.0], [59.0, 5461.0], [61.0, 2.0], [62.0, 4986.0], [66.0, 48.25], [67.0, 474.13043478260863], [65.0, 1271.875], [64.0, 4863.5], [71.0, 3.5], [69.0, 5022.0], [68.0, 5025.0], [87.0, 5072.0], [86.0, 5213.0], [91.0, 5111.5], [90.0, 5011.866666666667], [88.0, 5004.0], [95.0, 5189.5], [93.0, 5150.0], [99.0, 5361.666666666667], [97.0, 5243.0], [103.0, 2397.0], [101.0, 2476.0], [100.0, 5009.0], [107.0, 2434.0], [106.0, 2348.0], [105.0, 2609.0], [104.0, 2689.0], [111.0, 2460.0], [109.0, 2471.5], [115.0, 2585.5], [114.0, 2525.0], [113.0, 2401.0], [119.0, 2685.0], [117.0, 2645.0], [116.0, 2586.0], [143.0, 2756.3333333333335], [142.0, 2809.0], [140.0, 2795.5], [139.0, 2801.0], [138.0, 2775.5], [150.0, 2803.0], [149.0, 2759.0], [147.0, 2774.0], [145.0, 2735.0], [144.0, 2696.0], [155.0, 2747.0], [154.0, 2793.0], [152.0, 2800.5], [1.0, 7483.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[77.25500000000005, 3373.5100000000007]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 155.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 400.0, "minX": 1.68544104E12, "maxY": 18230.0, "series": [{"data": [[1.68544104E12, 18230.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68544104E12, 400.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544104E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3373.5100000000007, "minX": 1.68544104E12, "maxY": 3373.5100000000007, "series": [{"data": [[1.68544104E12, 3373.5100000000007]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544104E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3372.230000000002, "minX": 1.68544104E12, "maxY": 3372.230000000002, "series": [{"data": [[1.68544104E12, 3372.230000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544104E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.379999999999995, "minX": 1.68544104E12, "maxY": 9.379999999999995, "series": [{"data": [[1.68544104E12, 9.379999999999995]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544104E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.68544104E12, "maxY": 7550.0, "series": [{"data": [[1.68544104E12, 7550.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68544104E12, 5355.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68544104E12, 7519.79]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68544104E12, 5432.45]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68544104E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68544104E12, 3814.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544104E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 54.0, "minX": 4.0, "maxY": 7509.5, "series": [{"data": [[4.0, 7509.5], [45.0, 54.0], [96.0, 5156.0], [55.0, 2747.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 46.0, "minX": 4.0, "maxY": 7509.5, "series": [{"data": [[4.0, 7509.5], [45.0, 46.0], [96.0, 5156.0], [55.0, 2747.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.68544104E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.68544104E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544104E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.68544104E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.68544104E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68544104E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.68544104E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.68544104E12, 3.3333333333333335]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544104E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.68544104E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.68544104E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68544104E12, "title": "Total Transactions Per Second"}},
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

