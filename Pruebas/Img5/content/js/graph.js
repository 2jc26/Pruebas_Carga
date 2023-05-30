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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 4992.0, "series": [{"data": [[0.0, 4.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 4.0], [1.4, 4.0], [1.5, 4.0], [1.6, 4.0], [1.7, 4.0], [1.8, 4.0], [1.9, 4.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 5.0], [2.5, 5.0], [2.6, 5.0], [2.7, 5.0], [2.8, 5.0], [2.9, 5.0], [3.0, 5.0], [3.1, 5.0], [3.2, 5.0], [3.3, 5.0], [3.4, 5.0], [3.5, 5.0], [3.6, 5.0], [3.7, 5.0], [3.8, 5.0], [3.9, 5.0], [4.0, 14.0], [4.1, 14.0], [4.2, 14.0], [4.3, 14.0], [4.4, 14.0], [4.5, 14.0], [4.6, 14.0], [4.7, 14.0], [4.8, 14.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 14.0], [5.3, 14.0], [5.4, 14.0], [5.5, 14.0], [5.6, 14.0], [5.7, 14.0], [5.8, 14.0], [5.9, 14.0], [6.0, 27.0], [6.1, 27.0], [6.2, 27.0], [6.3, 27.0], [6.4, 27.0], [6.5, 27.0], [6.6, 27.0], [6.7, 27.0], [6.8, 27.0], [6.9, 27.0], [7.0, 27.0], [7.1, 27.0], [7.2, 27.0], [7.3, 27.0], [7.4, 27.0], [7.5, 27.0], [7.6, 27.0], [7.7, 27.0], [7.8, 27.0], [7.9, 27.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 42.0], [8.5, 42.0], [8.6, 42.0], [8.7, 42.0], [8.8, 42.0], [8.9, 42.0], [9.0, 42.0], [9.1, 42.0], [9.2, 42.0], [9.3, 42.0], [9.4, 42.0], [9.5, 42.0], [9.6, 42.0], [9.7, 42.0], [9.8, 42.0], [9.9, 42.0], [10.0, 44.0], [10.1, 44.0], [10.2, 44.0], [10.3, 44.0], [10.4, 44.0], [10.5, 44.0], [10.6, 44.0], [10.7, 44.0], [10.8, 44.0], [10.9, 44.0], [11.0, 44.0], [11.1, 44.0], [11.2, 44.0], [11.3, 44.0], [11.4, 44.0], [11.5, 44.0], [11.6, 44.0], [11.7, 44.0], [11.8, 44.0], [11.9, 44.0], [12.0, 45.0], [12.1, 45.0], [12.2, 45.0], [12.3, 45.0], [12.4, 45.0], [12.5, 45.0], [12.6, 45.0], [12.7, 45.0], [12.8, 45.0], [12.9, 45.0], [13.0, 45.0], [13.1, 45.0], [13.2, 45.0], [13.3, 45.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 45.0], [14.3, 45.0], [14.4, 45.0], [14.5, 45.0], [14.6, 45.0], [14.7, 45.0], [14.8, 45.0], [14.9, 45.0], [15.0, 45.0], [15.1, 45.0], [15.2, 45.0], [15.3, 45.0], [15.4, 45.0], [15.5, 45.0], [15.6, 45.0], [15.7, 45.0], [15.8, 45.0], [15.9, 45.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 48.0], [16.5, 48.0], [16.6, 48.0], [16.7, 48.0], [16.8, 48.0], [16.9, 48.0], [17.0, 48.0], [17.1, 48.0], [17.2, 48.0], [17.3, 48.0], [17.4, 48.0], [17.5, 48.0], [17.6, 48.0], [17.7, 48.0], [17.8, 48.0], [17.9, 48.0], [18.0, 49.0], [18.1, 49.0], [18.2, 49.0], [18.3, 49.0], [18.4, 49.0], [18.5, 49.0], [18.6, 49.0], [18.7, 49.0], [18.8, 49.0], [18.9, 49.0], [19.0, 49.0], [19.1, 49.0], [19.2, 49.0], [19.3, 49.0], [19.4, 49.0], [19.5, 49.0], [19.6, 49.0], [19.7, 49.0], [19.8, 49.0], [19.9, 49.0], [20.0, 1129.0], [20.1, 1129.0], [20.2, 1129.0], [20.3, 1129.0], [20.4, 1129.0], [20.5, 1129.0], [20.6, 1129.0], [20.7, 1129.0], [20.8, 1129.0], [20.9, 1129.0], [21.0, 1129.0], [21.1, 1129.0], [21.2, 1129.0], [21.3, 1129.0], [21.4, 1129.0], [21.5, 1129.0], [21.6, 1129.0], [21.7, 1129.0], [21.8, 1129.0], [21.9, 1129.0], [22.0, 1206.0], [22.1, 1206.0], [22.2, 1206.0], [22.3, 1206.0], [22.4, 1206.0], [22.5, 1206.0], [22.6, 1206.0], [22.7, 1206.0], [22.8, 1206.0], [22.9, 1206.0], [23.0, 1206.0], [23.1, 1206.0], [23.2, 1206.0], [23.3, 1206.0], [23.4, 1206.0], [23.5, 1206.0], [23.6, 1206.0], [23.7, 1206.0], [23.8, 1206.0], [23.9, 1206.0], [24.0, 1283.0], [24.1, 1283.0], [24.2, 1283.0], [24.3, 1283.0], [24.4, 1283.0], [24.5, 1283.0], [24.6, 1283.0], [24.7, 1283.0], [24.8, 1283.0], [24.9, 1283.0], [25.0, 1283.0], [25.1, 1283.0], [25.2, 1283.0], [25.3, 1283.0], [25.4, 1283.0], [25.5, 1283.0], [25.6, 1283.0], [25.7, 1283.0], [25.8, 1283.0], [25.9, 1283.0], [26.0, 1361.0], [26.1, 1361.0], [26.2, 1361.0], [26.3, 1361.0], [26.4, 1361.0], [26.5, 1361.0], [26.6, 1361.0], [26.7, 1361.0], [26.8, 1361.0], [26.9, 1361.0], [27.0, 1361.0], [27.1, 1361.0], [27.2, 1361.0], [27.3, 1361.0], [27.4, 1361.0], [27.5, 1361.0], [27.6, 1361.0], [27.7, 1361.0], [27.8, 1361.0], [27.9, 1361.0], [28.0, 1440.0], [28.1, 1440.0], [28.2, 1440.0], [28.3, 1440.0], [28.4, 1440.0], [28.5, 1440.0], [28.6, 1440.0], [28.7, 1440.0], [28.8, 1440.0], [28.9, 1440.0], [29.0, 1440.0], [29.1, 1440.0], [29.2, 1440.0], [29.3, 1440.0], [29.4, 1440.0], [29.5, 1440.0], [29.6, 1440.0], [29.7, 1440.0], [29.8, 1440.0], [29.9, 1440.0], [30.0, 1501.0], [30.1, 1501.0], [30.2, 1501.0], [30.3, 1501.0], [30.4, 1501.0], [30.5, 1501.0], [30.6, 1501.0], [30.7, 1501.0], [30.8, 1501.0], [30.9, 1501.0], [31.0, 1501.0], [31.1, 1501.0], [31.2, 1501.0], [31.3, 1501.0], [31.4, 1501.0], [31.5, 1501.0], [31.6, 1501.0], [31.7, 1501.0], [31.8, 1501.0], [31.9, 1501.0], [32.0, 1520.0], [32.1, 1520.0], [32.2, 1520.0], [32.3, 1520.0], [32.4, 1520.0], [32.5, 1520.0], [32.6, 1520.0], [32.7, 1520.0], [32.8, 1520.0], [32.9, 1520.0], [33.0, 1520.0], [33.1, 1520.0], [33.2, 1520.0], [33.3, 1520.0], [33.4, 1520.0], [33.5, 1520.0], [33.6, 1520.0], [33.7, 1520.0], [33.8, 1520.0], [33.9, 1520.0], [34.0, 1535.0], [34.1, 1535.0], [34.2, 1535.0], [34.3, 1535.0], [34.4, 1535.0], [34.5, 1535.0], [34.6, 1535.0], [34.7, 1535.0], [34.8, 1535.0], [34.9, 1535.0], [35.0, 1535.0], [35.1, 1535.0], [35.2, 1535.0], [35.3, 1535.0], [35.4, 1535.0], [35.5, 1535.0], [35.6, 1535.0], [35.7, 1535.0], [35.8, 1535.0], [35.9, 1535.0], [36.0, 1566.0], [36.1, 1566.0], [36.2, 1566.0], [36.3, 1566.0], [36.4, 1566.0], [36.5, 1566.0], [36.6, 1566.0], [36.7, 1566.0], [36.8, 1566.0], [36.9, 1566.0], [37.0, 1566.0], [37.1, 1566.0], [37.2, 1566.0], [37.3, 1566.0], [37.4, 1566.0], [37.5, 1566.0], [37.6, 1566.0], [37.7, 1566.0], [37.8, 1566.0], [37.9, 1566.0], [38.0, 1579.0], [38.1, 1579.0], [38.2, 1579.0], [38.3, 1579.0], [38.4, 1579.0], [38.5, 1579.0], [38.6, 1579.0], [38.7, 1579.0], [38.8, 1579.0], [38.9, 1579.0], [39.0, 1579.0], [39.1, 1579.0], [39.2, 1579.0], [39.3, 1579.0], [39.4, 1579.0], [39.5, 1579.0], [39.6, 1579.0], [39.7, 1579.0], [39.8, 1579.0], [39.9, 1579.0], [40.0, 1597.0], [40.1, 1597.0], [40.2, 1597.0], [40.3, 1597.0], [40.4, 1597.0], [40.5, 1597.0], [40.6, 1597.0], [40.7, 1597.0], [40.8, 1597.0], [40.9, 1597.0], [41.0, 1597.0], [41.1, 1597.0], [41.2, 1597.0], [41.3, 1597.0], [41.4, 1597.0], [41.5, 1597.0], [41.6, 1597.0], [41.7, 1597.0], [41.8, 1597.0], [41.9, 1597.0], [42.0, 1613.0], [42.1, 1613.0], [42.2, 1613.0], [42.3, 1613.0], [42.4, 1613.0], [42.5, 1613.0], [42.6, 1613.0], [42.7, 1613.0], [42.8, 1613.0], [42.9, 1613.0], [43.0, 1613.0], [43.1, 1613.0], [43.2, 1613.0], [43.3, 1613.0], [43.4, 1613.0], [43.5, 1613.0], [43.6, 1613.0], [43.7, 1613.0], [43.8, 1613.0], [43.9, 1613.0], [44.0, 1655.0], [44.1, 1655.0], [44.2, 1655.0], [44.3, 1655.0], [44.4, 1655.0], [44.5, 1655.0], [44.6, 1655.0], [44.7, 1655.0], [44.8, 1655.0], [44.9, 1655.0], [45.0, 1655.0], [45.1, 1655.0], [45.2, 1655.0], [45.3, 1655.0], [45.4, 1655.0], [45.5, 1655.0], [45.6, 1655.0], [45.7, 1655.0], [45.8, 1655.0], [45.9, 1655.0], [46.0, 1690.0], [46.1, 1690.0], [46.2, 1690.0], [46.3, 1690.0], [46.4, 1690.0], [46.5, 1690.0], [46.6, 1690.0], [46.7, 1690.0], [46.8, 1690.0], [46.9, 1690.0], [47.0, 1690.0], [47.1, 1690.0], [47.2, 1690.0], [47.3, 1690.0], [47.4, 1690.0], [47.5, 1690.0], [47.6, 1690.0], [47.7, 1690.0], [47.8, 1690.0], [47.9, 1690.0], [48.0, 2274.0], [48.1, 2274.0], [48.2, 2274.0], [48.3, 2274.0], [48.4, 2274.0], [48.5, 2274.0], [48.6, 2274.0], [48.7, 2274.0], [48.8, 2274.0], [48.9, 2274.0], [49.0, 2274.0], [49.1, 2274.0], [49.2, 2274.0], [49.3, 2274.0], [49.4, 2274.0], [49.5, 2274.0], [49.6, 2274.0], [49.7, 2274.0], [49.8, 2274.0], [49.9, 2274.0], [50.0, 2353.0], [50.1, 2353.0], [50.2, 2353.0], [50.3, 2353.0], [50.4, 2353.0], [50.5, 2353.0], [50.6, 2353.0], [50.7, 2353.0], [50.8, 2353.0], [50.9, 2353.0], [51.0, 2353.0], [51.1, 2353.0], [51.2, 2353.0], [51.3, 2353.0], [51.4, 2353.0], [51.5, 2353.0], [51.6, 2353.0], [51.7, 2353.0], [51.8, 2353.0], [51.9, 2353.0], [52.0, 2430.0], [52.1, 2430.0], [52.2, 2430.0], [52.3, 2430.0], [52.4, 2430.0], [52.5, 2430.0], [52.6, 2430.0], [52.7, 2430.0], [52.8, 2430.0], [52.9, 2430.0], [53.0, 2430.0], [53.1, 2430.0], [53.2, 2430.0], [53.3, 2430.0], [53.4, 2430.0], [53.5, 2430.0], [53.6, 2430.0], [53.7, 2430.0], [53.8, 2430.0], [53.9, 2430.0], [54.0, 2511.0], [54.1, 2511.0], [54.2, 2511.0], [54.3, 2511.0], [54.4, 2511.0], [54.5, 2511.0], [54.6, 2511.0], [54.7, 2511.0], [54.8, 2511.0], [54.9, 2511.0], [55.0, 2511.0], [55.1, 2511.0], [55.2, 2511.0], [55.3, 2511.0], [55.4, 2511.0], [55.5, 2511.0], [55.6, 2511.0], [55.7, 2511.0], [55.8, 2511.0], [55.9, 2511.0], [56.0, 2587.0], [56.1, 2587.0], [56.2, 2587.0], [56.3, 2587.0], [56.4, 2587.0], [56.5, 2587.0], [56.6, 2587.0], [56.7, 2587.0], [56.8, 2587.0], [56.9, 2587.0], [57.0, 2587.0], [57.1, 2587.0], [57.2, 2587.0], [57.3, 2587.0], [57.4, 2587.0], [57.5, 2587.0], [57.6, 2587.0], [57.7, 2587.0], [57.8, 2587.0], [57.9, 2587.0], [58.0, 2602.0], [58.1, 2602.0], [58.2, 2602.0], [58.3, 2602.0], [58.4, 2602.0], [58.5, 2602.0], [58.6, 2602.0], [58.7, 2602.0], [58.8, 2602.0], [58.9, 2602.0], [59.0, 2602.0], [59.1, 2602.0], [59.2, 2602.0], [59.3, 2602.0], [59.4, 2602.0], [59.5, 2602.0], [59.6, 2602.0], [59.7, 2602.0], [59.8, 2602.0], [59.9, 2602.0], [60.0, 2666.0], [60.1, 2666.0], [60.2, 2666.0], [60.3, 2666.0], [60.4, 2666.0], [60.5, 2666.0], [60.6, 2666.0], [60.7, 2666.0], [60.8, 2666.0], [60.9, 2666.0], [61.0, 2666.0], [61.1, 2666.0], [61.2, 2666.0], [61.3, 2666.0], [61.4, 2666.0], [61.5, 2666.0], [61.6, 2666.0], [61.7, 2666.0], [61.8, 2666.0], [61.9, 2666.0], [62.0, 2680.0], [62.1, 2680.0], [62.2, 2680.0], [62.3, 2680.0], [62.4, 2680.0], [62.5, 2680.0], [62.6, 2680.0], [62.7, 2680.0], [62.8, 2680.0], [62.9, 2680.0], [63.0, 2680.0], [63.1, 2680.0], [63.2, 2680.0], [63.3, 2680.0], [63.4, 2680.0], [63.5, 2680.0], [63.6, 2680.0], [63.7, 2680.0], [63.8, 2680.0], [63.9, 2680.0], [64.0, 2680.0], [64.1, 2680.0], [64.2, 2680.0], [64.3, 2680.0], [64.4, 2680.0], [64.5, 2680.0], [64.6, 2680.0], [64.7, 2680.0], [64.8, 2680.0], [64.9, 2680.0], [65.0, 2680.0], [65.1, 2680.0], [65.2, 2680.0], [65.3, 2680.0], [65.4, 2680.0], [65.5, 2680.0], [65.6, 2680.0], [65.7, 2680.0], [65.8, 2680.0], [65.9, 2680.0], [66.0, 2758.0], [66.1, 2758.0], [66.2, 2758.0], [66.3, 2758.0], [66.4, 2758.0], [66.5, 2758.0], [66.6, 2758.0], [66.7, 2758.0], [66.8, 2758.0], [66.9, 2758.0], [67.0, 2758.0], [67.1, 2758.0], [67.2, 2758.0], [67.3, 2758.0], [67.4, 2758.0], [67.5, 2758.0], [67.6, 2758.0], [67.7, 2758.0], [67.8, 2758.0], [67.9, 2758.0], [68.0, 2760.0], [68.1, 2760.0], [68.2, 2760.0], [68.3, 2760.0], [68.4, 2760.0], [68.5, 2760.0], [68.6, 2760.0], [68.7, 2760.0], [68.8, 2760.0], [68.9, 2760.0], [69.0, 2760.0], [69.1, 2760.0], [69.2, 2760.0], [69.3, 2760.0], [69.4, 2760.0], [69.5, 2760.0], [69.6, 2760.0], [69.7, 2760.0], [69.8, 2760.0], [69.9, 2760.0], [70.0, 2836.0], [70.1, 2836.0], [70.2, 2836.0], [70.3, 2836.0], [70.4, 2836.0], [70.5, 2836.0], [70.6, 2836.0], [70.7, 2836.0], [70.8, 2836.0], [70.9, 2836.0], [71.0, 2836.0], [71.1, 2836.0], [71.2, 2836.0], [71.3, 2836.0], [71.4, 2836.0], [71.5, 2836.0], [71.6, 2836.0], [71.7, 2836.0], [71.8, 2836.0], [71.9, 2836.0], [72.0, 2836.0], [72.1, 2836.0], [72.2, 2836.0], [72.3, 2836.0], [72.4, 2836.0], [72.5, 2836.0], [72.6, 2836.0], [72.7, 2836.0], [72.8, 2836.0], [72.9, 2836.0], [73.0, 2836.0], [73.1, 2836.0], [73.2, 2836.0], [73.3, 2836.0], [73.4, 2836.0], [73.5, 2836.0], [73.6, 2836.0], [73.7, 2836.0], [73.8, 2836.0], [73.9, 2836.0], [74.0, 2914.0], [74.1, 2914.0], [74.2, 2914.0], [74.3, 2914.0], [74.4, 2914.0], [74.5, 2914.0], [74.6, 2914.0], [74.7, 2914.0], [74.8, 2914.0], [74.9, 2914.0], [75.0, 2914.0], [75.1, 2914.0], [75.2, 2914.0], [75.3, 2914.0], [75.4, 2914.0], [75.5, 2914.0], [75.6, 2914.0], [75.7, 2914.0], [75.8, 2914.0], [75.9, 2914.0], [76.0, 2994.0], [76.1, 2994.0], [76.2, 2994.0], [76.3, 2994.0], [76.4, 2994.0], [76.5, 2994.0], [76.6, 2994.0], [76.7, 2994.0], [76.8, 2994.0], [76.9, 2994.0], [77.0, 2994.0], [77.1, 2994.0], [77.2, 2994.0], [77.3, 2994.0], [77.4, 2994.0], [77.5, 2994.0], [77.6, 2994.0], [77.7, 2994.0], [77.8, 2994.0], [77.9, 2994.0], [78.0, 3072.0], [78.1, 3072.0], [78.2, 3072.0], [78.3, 3072.0], [78.4, 3072.0], [78.5, 3072.0], [78.6, 3072.0], [78.7, 3072.0], [78.8, 3072.0], [78.9, 3072.0], [79.0, 3072.0], [79.1, 3072.0], [79.2, 3072.0], [79.3, 3072.0], [79.4, 3072.0], [79.5, 3072.0], [79.6, 3072.0], [79.7, 3072.0], [79.8, 3072.0], [79.9, 3072.0], [80.0, 3138.0], [80.1, 3138.0], [80.2, 3138.0], [80.3, 3138.0], [80.4, 3138.0], [80.5, 3138.0], [80.6, 3138.0], [80.7, 3138.0], [80.8, 3138.0], [80.9, 3138.0], [81.0, 3138.0], [81.1, 3138.0], [81.2, 3138.0], [81.3, 3138.0], [81.4, 3138.0], [81.5, 3138.0], [81.6, 3138.0], [81.7, 3138.0], [81.8, 3138.0], [81.9, 3138.0], [82.0, 3215.0], [82.1, 3215.0], [82.2, 3215.0], [82.3, 3215.0], [82.4, 3215.0], [82.5, 3215.0], [82.6, 3215.0], [82.7, 3215.0], [82.8, 3215.0], [82.9, 3215.0], [83.0, 3215.0], [83.1, 3215.0], [83.2, 3215.0], [83.3, 3215.0], [83.4, 3215.0], [83.5, 3215.0], [83.6, 3215.0], [83.7, 3215.0], [83.8, 3215.0], [83.9, 3215.0], [84.0, 4443.0], [84.1, 4443.0], [84.2, 4443.0], [84.3, 4443.0], [84.4, 4443.0], [84.5, 4443.0], [84.6, 4443.0], [84.7, 4443.0], [84.8, 4443.0], [84.9, 4443.0], [85.0, 4443.0], [85.1, 4443.0], [85.2, 4443.0], [85.3, 4443.0], [85.4, 4443.0], [85.5, 4443.0], [85.6, 4443.0], [85.7, 4443.0], [85.8, 4443.0], [85.9, 4443.0], [86.0, 4521.0], [86.1, 4521.0], [86.2, 4521.0], [86.3, 4521.0], [86.4, 4521.0], [86.5, 4521.0], [86.6, 4521.0], [86.7, 4521.0], [86.8, 4521.0], [86.9, 4521.0], [87.0, 4521.0], [87.1, 4521.0], [87.2, 4521.0], [87.3, 4521.0], [87.4, 4521.0], [87.5, 4521.0], [87.6, 4521.0], [87.7, 4521.0], [87.8, 4521.0], [87.9, 4521.0], [88.0, 4600.0], [88.1, 4600.0], [88.2, 4600.0], [88.3, 4600.0], [88.4, 4600.0], [88.5, 4600.0], [88.6, 4600.0], [88.7, 4600.0], [88.8, 4600.0], [88.9, 4600.0], [89.0, 4600.0], [89.1, 4600.0], [89.2, 4600.0], [89.3, 4600.0], [89.4, 4600.0], [89.5, 4600.0], [89.6, 4600.0], [89.7, 4600.0], [89.8, 4600.0], [89.9, 4600.0], [90.0, 4678.0], [90.1, 4678.0], [90.2, 4678.0], [90.3, 4678.0], [90.4, 4678.0], [90.5, 4678.0], [90.6, 4678.0], [90.7, 4678.0], [90.8, 4678.0], [90.9, 4678.0], [91.0, 4678.0], [91.1, 4678.0], [91.2, 4678.0], [91.3, 4678.0], [91.4, 4678.0], [91.5, 4678.0], [91.6, 4678.0], [91.7, 4678.0], [91.8, 4678.0], [91.9, 4678.0], [92.0, 4759.0], [92.1, 4759.0], [92.2, 4759.0], [92.3, 4759.0], [92.4, 4759.0], [92.5, 4759.0], [92.6, 4759.0], [92.7, 4759.0], [92.8, 4759.0], [92.9, 4759.0], [93.0, 4759.0], [93.1, 4759.0], [93.2, 4759.0], [93.3, 4759.0], [93.4, 4759.0], [93.5, 4759.0], [93.6, 4759.0], [93.7, 4759.0], [93.8, 4759.0], [93.9, 4759.0], [94.0, 4835.0], [94.1, 4835.0], [94.2, 4835.0], [94.3, 4835.0], [94.4, 4835.0], [94.5, 4835.0], [94.6, 4835.0], [94.7, 4835.0], [94.8, 4835.0], [94.9, 4835.0], [95.0, 4835.0], [95.1, 4835.0], [95.2, 4835.0], [95.3, 4835.0], [95.4, 4835.0], [95.5, 4835.0], [95.6, 4835.0], [95.7, 4835.0], [95.8, 4835.0], [95.9, 4835.0], [96.0, 4915.0], [96.1, 4915.0], [96.2, 4915.0], [96.3, 4915.0], [96.4, 4915.0], [96.5, 4915.0], [96.6, 4915.0], [96.7, 4915.0], [96.8, 4915.0], [96.9, 4915.0], [97.0, 4915.0], [97.1, 4915.0], [97.2, 4915.0], [97.3, 4915.0], [97.4, 4915.0], [97.5, 4915.0], [97.6, 4915.0], [97.7, 4915.0], [97.8, 4915.0], [97.9, 4915.0], [98.0, 4992.0], [98.1, 4992.0], [98.2, 4992.0], [98.3, 4992.0], [98.4, 4992.0], [98.5, 4992.0], [98.6, 4992.0], [98.7, 4992.0], [98.8, 4992.0], [98.9, 4992.0], [99.0, 4992.0], [99.1, 4992.0], [99.2, 4992.0], [99.3, 4992.0], [99.4, 4992.0], [99.5, 4992.0], [99.6, 4992.0], [99.7, 4992.0], [99.8, 4992.0], [99.9, 4992.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 10.0, "series": [{"data": [[0.0, 10.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 2.0], [2600.0, 4.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 2.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [1100.0, 1.0], [4600.0, 2.0], [4400.0, 1.0], [4500.0, 1.0], [1200.0, 2.0], [4800.0, 1.0], [4700.0, 1.0], [4900.0, 2.0], [1300.0, 1.0], [1400.0, 1.0], [1500.0, 6.0], [1600.0, 3.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 35.0, "series": [{"data": [[0.0, 10.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 35.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.040000000000003, "minX": 1.6854429E12, "maxY": 18.040000000000003, "series": [{"data": [[1.6854429E12, 18.040000000000003]], "isOverall": false, "label": "Prueba_Rendimiento", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6854429E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 22.333333333333336, "minX": 1.0, "maxY": 4759.0, "series": [{"data": [[33.0, 1479.0], [2.0, 4759.0], [35.0, 1574.0], [37.0, 1579.0], [36.0, 1690.0], [39.0, 1655.0], [38.0, 1501.0], [40.0, 1566.0], [3.0, 3188.0], [5.0, 3003.0], [7.0, 2361.5], [8.0, 1657.3333333333333], [15.0, 2836.5714285714284], [1.0, 22.333333333333336], [16.0, 3138.0], [17.0, 3215.0], [18.0, 2511.0], [19.0, 2353.0], [20.0, 2274.0], [21.0, 2430.0], [23.0, 2626.5], [24.0, 2760.0], [26.0, 2758.0], [27.0, 1129.0], [29.0, 1363.0], [31.0, 1361.5]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[18.040000000000003, 2160.94]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data: {"result": {"minY": 2160.94, "minX": 1.6854429E12, "maxY": 2160.94, "series": [{"data": [[1.6854429E12, 2160.94]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6854429E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2160.36, "minX": 1.6854429E12, "maxY": 2160.36, "series": [{"data": [[1.6854429E12, 2160.36]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6854429E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.1399999999999997, "minX": 1.6854429E12, "maxY": 3.1399999999999997, "series": [{"data": [[1.6854429E12, 3.1399999999999997]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6854429E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.6854429E12, "maxY": 4992.0, "series": [{"data": [[1.6854429E12, 4992.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6854429E12, 4670.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6854429E12, 4992.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6854429E12, 4871.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6854429E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6854429E12, 2313.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6854429E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 43.0, "minX": 8.0, "maxY": 4718.5, "series": [{"data": [[8.0, 4718.5], [18.0, 2719.0], [10.0, 43.0], [14.0, 1527.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 33.5, "minX": 8.0, "maxY": 4718.5, "series": [{"data": [[8.0, 4718.5], [18.0, 2719.0], [10.0, 33.5], [14.0, 1527.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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

