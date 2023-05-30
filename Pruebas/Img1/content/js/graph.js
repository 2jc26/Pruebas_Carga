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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 893.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 4.0], [5.8, 4.0], [5.9, 4.0], [6.0, 5.0], [6.1, 5.0], [6.2, 6.0], [6.3, 6.0], [6.4, 8.0], [6.5, 9.0], [6.6, 11.0], [6.7, 12.0], [6.8, 15.0], [6.9, 28.0], [7.0, 32.0], [7.1, 37.0], [7.2, 42.0], [7.3, 44.0], [7.4, 46.0], [7.5, 46.0], [7.6, 52.0], [7.7, 54.0], [7.8, 61.0], [7.9, 82.0], [8.0, 82.0], [8.1, 83.0], [8.2, 83.0], [8.3, 86.0], [8.4, 87.0], [8.5, 88.0], [8.6, 90.0], [8.7, 93.0], [8.8, 94.0], [8.9, 95.0], [9.0, 96.0], [9.1, 98.0], [9.2, 100.0], [9.3, 101.0], [9.4, 103.0], [9.5, 104.0], [9.6, 104.0], [9.7, 105.0], [9.8, 107.0], [9.9, 107.0], [10.0, 110.0], [10.1, 113.0], [10.2, 115.0], [10.3, 115.0], [10.4, 116.0], [10.5, 118.0], [10.6, 119.0], [10.7, 126.0], [10.8, 130.0], [10.9, 130.0], [11.0, 140.0], [11.1, 141.0], [11.2, 141.0], [11.3, 142.0], [11.4, 142.0], [11.5, 142.0], [11.6, 143.0], [11.7, 143.0], [11.8, 143.0], [11.9, 145.0], [12.0, 147.0], [12.1, 147.0], [12.2, 148.0], [12.3, 148.0], [12.4, 148.0], [12.5, 149.0], [12.6, 149.0], [12.7, 150.0], [12.8, 151.0], [12.9, 152.0], [13.0, 152.0], [13.1, 153.0], [13.2, 153.0], [13.3, 157.0], [13.4, 157.0], [13.5, 158.0], [13.6, 158.0], [13.7, 158.0], [13.8, 160.0], [13.9, 161.0], [14.0, 161.0], [14.1, 163.0], [14.2, 164.0], [14.3, 164.0], [14.4, 164.0], [14.5, 165.0], [14.6, 165.0], [14.7, 166.0], [14.8, 169.0], [14.9, 171.0], [15.0, 171.0], [15.1, 173.0], [15.2, 174.0], [15.3, 175.0], [15.4, 179.0], [15.5, 181.0], [15.6, 181.0], [15.7, 182.0], [15.8, 185.0], [15.9, 189.0], [16.0, 190.0], [16.1, 193.0], [16.2, 194.0], [16.3, 195.0], [16.4, 201.0], [16.5, 202.0], [16.6, 203.0], [16.7, 204.0], [16.8, 204.0], [16.9, 204.0], [17.0, 205.0], [17.1, 207.0], [17.2, 208.0], [17.3, 208.0], [17.4, 210.0], [17.5, 211.0], [17.6, 211.0], [17.7, 212.0], [17.8, 213.0], [17.9, 214.0], [18.0, 214.0], [18.1, 214.0], [18.2, 215.0], [18.3, 216.0], [18.4, 218.0], [18.5, 218.0], [18.6, 222.0], [18.7, 223.0], [18.8, 224.0], [18.9, 224.0], [19.0, 226.0], [19.1, 227.0], [19.2, 227.0], [19.3, 227.0], [19.4, 229.0], [19.5, 230.0], [19.6, 232.0], [19.7, 232.0], [19.8, 233.0], [19.9, 235.0], [20.0, 235.0], [20.1, 235.0], [20.2, 237.0], [20.3, 237.0], [20.4, 238.0], [20.5, 238.0], [20.6, 240.0], [20.7, 240.0], [20.8, 240.0], [20.9, 242.0], [21.0, 242.0], [21.1, 242.0], [21.2, 244.0], [21.3, 256.0], [21.4, 258.0], [21.5, 266.0], [21.6, 267.0], [21.7, 270.0], [21.8, 271.0], [21.9, 279.0], [22.0, 279.0], [22.1, 280.0], [22.2, 280.0], [22.3, 280.0], [22.4, 281.0], [22.5, 282.0], [22.6, 283.0], [22.7, 289.0], [22.8, 290.0], [22.9, 299.0], [23.0, 303.0], [23.1, 304.0], [23.2, 311.0], [23.3, 312.0], [23.4, 327.0], [23.5, 328.0], [23.6, 331.0], [23.7, 334.0], [23.8, 335.0], [23.9, 337.0], [24.0, 340.0], [24.1, 342.0], [24.2, 342.0], [24.3, 343.0], [24.4, 345.0], [24.5, 349.0], [24.6, 350.0], [24.7, 351.0], [24.8, 353.0], [24.9, 353.0], [25.0, 354.0], [25.1, 354.0], [25.2, 354.0], [25.3, 354.0], [25.4, 355.0], [25.5, 355.0], [25.6, 356.0], [25.7, 357.0], [25.8, 357.0], [25.9, 358.0], [26.0, 358.0], [26.1, 358.0], [26.2, 358.0], [26.3, 359.0], [26.4, 361.0], [26.5, 361.0], [26.6, 362.0], [26.7, 362.0], [26.8, 362.0], [26.9, 362.0], [27.0, 363.0], [27.1, 364.0], [27.2, 364.0], [27.3, 365.0], [27.4, 365.0], [27.5, 366.0], [27.6, 366.0], [27.7, 366.0], [27.8, 367.0], [27.9, 367.0], [28.0, 367.0], [28.1, 368.0], [28.2, 368.0], [28.3, 368.0], [28.4, 369.0], [28.5, 369.0], [28.6, 370.0], [28.7, 370.0], [28.8, 370.0], [28.9, 370.0], [29.0, 371.0], [29.1, 371.0], [29.2, 371.0], [29.3, 371.0], [29.4, 371.0], [29.5, 371.0], [29.6, 372.0], [29.7, 372.0], [29.8, 372.0], [29.9, 372.0], [30.0, 372.0], [30.1, 373.0], [30.2, 373.0], [30.3, 373.0], [30.4, 373.0], [30.5, 373.0], [30.6, 374.0], [30.7, 374.0], [30.8, 374.0], [30.9, 374.0], [31.0, 374.0], [31.1, 375.0], [31.2, 375.0], [31.3, 375.0], [31.4, 375.0], [31.5, 376.0], [31.6, 376.0], [31.7, 376.0], [31.8, 376.0], [31.9, 376.0], [32.0, 376.0], [32.1, 376.0], [32.2, 376.0], [32.3, 376.0], [32.4, 376.0], [32.5, 377.0], [32.6, 378.0], [32.7, 378.0], [32.8, 378.0], [32.9, 379.0], [33.0, 379.0], [33.1, 379.0], [33.2, 379.0], [33.3, 379.0], [33.4, 379.0], [33.5, 380.0], [33.6, 380.0], [33.7, 380.0], [33.8, 380.0], [33.9, 380.0], [34.0, 380.0], [34.1, 380.0], [34.2, 381.0], [34.3, 381.0], [34.4, 381.0], [34.5, 382.0], [34.6, 383.0], [34.7, 383.0], [34.8, 383.0], [34.9, 383.0], [35.0, 384.0], [35.1, 384.0], [35.2, 385.0], [35.3, 385.0], [35.4, 385.0], [35.5, 385.0], [35.6, 385.0], [35.7, 386.0], [35.8, 386.0], [35.9, 386.0], [36.0, 386.0], [36.1, 386.0], [36.2, 387.0], [36.3, 387.0], [36.4, 388.0], [36.5, 388.0], [36.6, 388.0], [36.7, 389.0], [36.8, 389.0], [36.9, 389.0], [37.0, 389.0], [37.1, 389.0], [37.2, 390.0], [37.3, 391.0], [37.4, 391.0], [37.5, 391.0], [37.6, 391.0], [37.7, 392.0], [37.8, 392.0], [37.9, 392.0], [38.0, 393.0], [38.1, 393.0], [38.2, 394.0], [38.3, 394.0], [38.4, 395.0], [38.5, 395.0], [38.6, 396.0], [38.7, 396.0], [38.8, 396.0], [38.9, 396.0], [39.0, 397.0], [39.1, 397.0], [39.2, 398.0], [39.3, 398.0], [39.4, 398.0], [39.5, 399.0], [39.6, 399.0], [39.7, 400.0], [39.8, 400.0], [39.9, 400.0], [40.0, 400.0], [40.1, 401.0], [40.2, 401.0], [40.3, 401.0], [40.4, 401.0], [40.5, 402.0], [40.6, 403.0], [40.7, 404.0], [40.8, 405.0], [40.9, 405.0], [41.0, 405.0], [41.1, 406.0], [41.2, 408.0], [41.3, 408.0], [41.4, 409.0], [41.5, 409.0], [41.6, 409.0], [41.7, 409.0], [41.8, 410.0], [41.9, 410.0], [42.0, 410.0], [42.1, 410.0], [42.2, 410.0], [42.3, 410.0], [42.4, 411.0], [42.5, 411.0], [42.6, 411.0], [42.7, 411.0], [42.8, 411.0], [42.9, 412.0], [43.0, 412.0], [43.1, 413.0], [43.2, 413.0], [43.3, 414.0], [43.4, 414.0], [43.5, 414.0], [43.6, 414.0], [43.7, 414.0], [43.8, 414.0], [43.9, 415.0], [44.0, 415.0], [44.1, 415.0], [44.2, 415.0], [44.3, 416.0], [44.4, 416.0], [44.5, 417.0], [44.6, 417.0], [44.7, 417.0], [44.8, 418.0], [44.9, 418.0], [45.0, 418.0], [45.1, 419.0], [45.2, 420.0], [45.3, 420.0], [45.4, 420.0], [45.5, 421.0], [45.6, 421.0], [45.7, 421.0], [45.8, 422.0], [45.9, 422.0], [46.0, 424.0], [46.1, 424.0], [46.2, 425.0], [46.3, 427.0], [46.4, 427.0], [46.5, 427.0], [46.6, 427.0], [46.7, 428.0], [46.8, 430.0], [46.9, 431.0], [47.0, 432.0], [47.1, 433.0], [47.2, 434.0], [47.3, 436.0], [47.4, 436.0], [47.5, 438.0], [47.6, 439.0], [47.7, 439.0], [47.8, 439.0], [47.9, 439.0], [48.0, 440.0], [48.1, 440.0], [48.2, 440.0], [48.3, 442.0], [48.4, 442.0], [48.5, 442.0], [48.6, 444.0], [48.7, 444.0], [48.8, 445.0], [48.9, 445.0], [49.0, 445.0], [49.1, 445.0], [49.2, 446.0], [49.3, 448.0], [49.4, 449.0], [49.5, 449.0], [49.6, 449.0], [49.7, 449.0], [49.8, 449.0], [49.9, 450.0], [50.0, 450.0], [50.1, 451.0], [50.2, 451.0], [50.3, 451.0], [50.4, 451.0], [50.5, 451.0], [50.6, 452.0], [50.7, 452.0], [50.8, 452.0], [50.9, 452.0], [51.0, 453.0], [51.1, 454.0], [51.2, 455.0], [51.3, 455.0], [51.4, 455.0], [51.5, 456.0], [51.6, 457.0], [51.7, 457.0], [51.8, 457.0], [51.9, 457.0], [52.0, 457.0], [52.1, 458.0], [52.2, 459.0], [52.3, 459.0], [52.4, 460.0], [52.5, 460.0], [52.6, 460.0], [52.7, 461.0], [52.8, 461.0], [52.9, 462.0], [53.0, 462.0], [53.1, 462.0], [53.2, 463.0], [53.3, 463.0], [53.4, 464.0], [53.5, 465.0], [53.6, 465.0], [53.7, 465.0], [53.8, 467.0], [53.9, 467.0], [54.0, 468.0], [54.1, 468.0], [54.2, 468.0], [54.3, 469.0], [54.4, 469.0], [54.5, 469.0], [54.6, 469.0], [54.7, 470.0], [54.8, 472.0], [54.9, 473.0], [55.0, 475.0], [55.1, 477.0], [55.2, 477.0], [55.3, 478.0], [55.4, 479.0], [55.5, 479.0], [55.6, 479.0], [55.7, 479.0], [55.8, 480.0], [55.9, 480.0], [56.0, 480.0], [56.1, 482.0], [56.2, 483.0], [56.3, 483.0], [56.4, 485.0], [56.5, 486.0], [56.6, 487.0], [56.7, 488.0], [56.8, 490.0], [56.9, 490.0], [57.0, 497.0], [57.1, 498.0], [57.2, 501.0], [57.3, 507.0], [57.4, 512.0], [57.5, 517.0], [57.6, 517.0], [57.7, 518.0], [57.8, 519.0], [57.9, 521.0], [58.0, 522.0], [58.1, 522.0], [58.2, 523.0], [58.3, 524.0], [58.4, 525.0], [58.5, 527.0], [58.6, 529.0], [58.7, 532.0], [58.8, 537.0], [58.9, 542.0], [59.0, 542.0], [59.1, 545.0], [59.2, 547.0], [59.3, 548.0], [59.4, 548.0], [59.5, 551.0], [59.6, 557.0], [59.7, 559.0], [59.8, 562.0], [59.9, 563.0], [60.0, 565.0], [60.1, 567.0], [60.2, 569.0], [60.3, 569.0], [60.4, 572.0], [60.5, 572.0], [60.6, 576.0], [60.7, 594.0], [60.8, 595.0], [60.9, 595.0], [61.0, 595.0], [61.1, 596.0], [61.2, 597.0], [61.3, 597.0], [61.4, 599.0], [61.5, 600.0], [61.6, 600.0], [61.7, 600.0], [61.8, 601.0], [61.9, 601.0], [62.0, 602.0], [62.1, 603.0], [62.2, 603.0], [62.3, 603.0], [62.4, 604.0], [62.5, 604.0], [62.6, 604.0], [62.7, 605.0], [62.8, 605.0], [62.9, 605.0], [63.0, 606.0], [63.1, 606.0], [63.2, 606.0], [63.3, 606.0], [63.4, 606.0], [63.5, 607.0], [63.6, 607.0], [63.7, 608.0], [63.8, 608.0], [63.9, 608.0], [64.0, 608.0], [64.1, 609.0], [64.2, 610.0], [64.3, 610.0], [64.4, 610.0], [64.5, 612.0], [64.6, 613.0], [64.7, 615.0], [64.8, 617.0], [64.9, 618.0], [65.0, 620.0], [65.1, 621.0], [65.2, 621.0], [65.3, 622.0], [65.4, 623.0], [65.5, 624.0], [65.6, 626.0], [65.7, 630.0], [65.8, 631.0], [65.9, 631.0], [66.0, 633.0], [66.1, 634.0], [66.2, 634.0], [66.3, 635.0], [66.4, 635.0], [66.5, 636.0], [66.6, 636.0], [66.7, 636.0], [66.8, 637.0], [66.9, 637.0], [67.0, 638.0], [67.1, 638.0], [67.2, 638.0], [67.3, 639.0], [67.4, 640.0], [67.5, 640.0], [67.6, 642.0], [67.7, 642.0], [67.8, 642.0], [67.9, 643.0], [68.0, 644.0], [68.1, 645.0], [68.2, 645.0], [68.3, 647.0], [68.4, 647.0], [68.5, 647.0], [68.6, 648.0], [68.7, 648.0], [68.8, 648.0], [68.9, 649.0], [69.0, 649.0], [69.1, 649.0], [69.2, 649.0], [69.3, 649.0], [69.4, 649.0], [69.5, 649.0], [69.6, 649.0], [69.7, 649.0], [69.8, 650.0], [69.9, 650.0], [70.0, 650.0], [70.1, 651.0], [70.2, 651.0], [70.3, 651.0], [70.4, 651.0], [70.5, 651.0], [70.6, 651.0], [70.7, 651.0], [70.8, 652.0], [70.9, 652.0], [71.0, 653.0], [71.1, 654.0], [71.2, 654.0], [71.3, 656.0], [71.4, 656.0], [71.5, 657.0], [71.6, 657.0], [71.7, 658.0], [71.8, 658.0], [71.9, 660.0], [72.0, 661.0], [72.1, 663.0], [72.2, 664.0], [72.3, 664.0], [72.4, 666.0], [72.5, 666.0], [72.6, 666.0], [72.7, 666.0], [72.8, 672.0], [72.9, 673.0], [73.0, 673.0], [73.1, 673.0], [73.2, 674.0], [73.3, 675.0], [73.4, 675.0], [73.5, 675.0], [73.6, 677.0], [73.7, 677.0], [73.8, 682.0], [73.9, 683.0], [74.0, 686.0], [74.1, 687.0], [74.2, 688.0], [74.3, 689.0], [74.4, 689.0], [74.5, 690.0], [74.6, 692.0], [74.7, 694.0], [74.8, 695.0], [74.9, 695.0], [75.0, 695.0], [75.1, 695.0], [75.2, 697.0], [75.3, 699.0], [75.4, 699.0], [75.5, 699.0], [75.6, 700.0], [75.7, 701.0], [75.8, 707.0], [75.9, 708.0], [76.0, 709.0], [76.1, 711.0], [76.2, 712.0], [76.3, 713.0], [76.4, 713.0], [76.5, 714.0], [76.6, 715.0], [76.7, 716.0], [76.8, 718.0], [76.9, 718.0], [77.0, 718.0], [77.1, 718.0], [77.2, 718.0], [77.3, 718.0], [77.4, 719.0], [77.5, 719.0], [77.6, 719.0], [77.7, 720.0], [77.8, 721.0], [77.9, 721.0], [78.0, 723.0], [78.1, 725.0], [78.2, 728.0], [78.3, 728.0], [78.4, 729.0], [78.5, 730.0], [78.6, 731.0], [78.7, 732.0], [78.8, 732.0], [78.9, 737.0], [79.0, 739.0], [79.1, 739.0], [79.2, 741.0], [79.3, 743.0], [79.4, 744.0], [79.5, 744.0], [79.6, 745.0], [79.7, 745.0], [79.8, 746.0], [79.9, 746.0], [80.0, 746.0], [80.1, 747.0], [80.2, 747.0], [80.3, 747.0], [80.4, 747.0], [80.5, 747.0], [80.6, 747.0], [80.7, 748.0], [80.8, 748.0], [80.9, 748.0], [81.0, 749.0], [81.1, 749.0], [81.2, 749.0], [81.3, 750.0], [81.4, 750.0], [81.5, 752.0], [81.6, 754.0], [81.7, 756.0], [81.8, 757.0], [81.9, 758.0], [82.0, 759.0], [82.1, 760.0], [82.2, 760.0], [82.3, 760.0], [82.4, 761.0], [82.5, 763.0], [82.6, 764.0], [82.7, 764.0], [82.8, 765.0], [82.9, 765.0], [83.0, 766.0], [83.1, 767.0], [83.2, 767.0], [83.3, 767.0], [83.4, 770.0], [83.5, 770.0], [83.6, 770.0], [83.7, 770.0], [83.8, 770.0], [83.9, 771.0], [84.0, 771.0], [84.1, 772.0], [84.2, 773.0], [84.3, 773.0], [84.4, 774.0], [84.5, 774.0], [84.6, 774.0], [84.7, 775.0], [84.8, 775.0], [84.9, 775.0], [85.0, 776.0], [85.1, 776.0], [85.2, 776.0], [85.3, 776.0], [85.4, 776.0], [85.5, 777.0], [85.6, 777.0], [85.7, 778.0], [85.8, 778.0], [85.9, 778.0], [86.0, 778.0], [86.1, 778.0], [86.2, 778.0], [86.3, 780.0], [86.4, 781.0], [86.5, 781.0], [86.6, 781.0], [86.7, 782.0], [86.8, 783.0], [86.9, 784.0], [87.0, 784.0], [87.1, 784.0], [87.2, 784.0], [87.3, 784.0], [87.4, 785.0], [87.5, 787.0], [87.6, 789.0], [87.7, 789.0], [87.8, 790.0], [87.9, 790.0], [88.0, 793.0], [88.1, 793.0], [88.2, 794.0], [88.3, 795.0], [88.4, 796.0], [88.5, 796.0], [88.6, 796.0], [88.7, 797.0], [88.8, 797.0], [88.9, 797.0], [89.0, 797.0], [89.1, 797.0], [89.2, 797.0], [89.3, 798.0], [89.4, 798.0], [89.5, 799.0], [89.6, 799.0], [89.7, 799.0], [89.8, 799.0], [89.9, 800.0], [90.0, 800.0], [90.1, 801.0], [90.2, 801.0], [90.3, 801.0], [90.4, 802.0], [90.5, 802.0], [90.6, 802.0], [90.7, 802.0], [90.8, 803.0], [90.9, 803.0], [91.0, 803.0], [91.1, 804.0], [91.2, 804.0], [91.3, 804.0], [91.4, 805.0], [91.5, 805.0], [91.6, 805.0], [91.7, 805.0], [91.8, 805.0], [91.9, 806.0], [92.0, 806.0], [92.1, 807.0], [92.2, 807.0], [92.3, 807.0], [92.4, 808.0], [92.5, 809.0], [92.6, 810.0], [92.7, 810.0], [92.8, 810.0], [92.9, 810.0], [93.0, 811.0], [93.1, 811.0], [93.2, 812.0], [93.3, 812.0], [93.4, 813.0], [93.5, 813.0], [93.6, 814.0], [93.7, 814.0], [93.8, 815.0], [93.9, 815.0], [94.0, 815.0], [94.1, 815.0], [94.2, 817.0], [94.3, 820.0], [94.4, 822.0], [94.5, 822.0], [94.6, 823.0], [94.7, 824.0], [94.8, 825.0], [94.9, 828.0], [95.0, 831.0], [95.1, 834.0], [95.2, 837.0], [95.3, 838.0], [95.4, 841.0], [95.5, 842.0], [95.6, 842.0], [95.7, 843.0], [95.8, 844.0], [95.9, 846.0], [96.0, 847.0], [96.1, 847.0], [96.2, 848.0], [96.3, 849.0], [96.4, 849.0], [96.5, 850.0], [96.6, 851.0], [96.7, 851.0], [96.8, 851.0], [96.9, 851.0], [97.0, 852.0], [97.1, 852.0], [97.2, 853.0], [97.3, 855.0], [97.4, 855.0], [97.5, 855.0], [97.6, 856.0], [97.7, 856.0], [97.8, 856.0], [97.9, 857.0], [98.0, 858.0], [98.1, 858.0], [98.2, 858.0], [98.3, 858.0], [98.4, 858.0], [98.5, 860.0], [98.6, 865.0], [98.7, 865.0], [98.8, 865.0], [98.9, 868.0], [99.0, 868.0], [99.1, 868.0], [99.2, 869.0], [99.3, 878.0], [99.4, 880.0], [99.5, 880.0], [99.6, 880.0], [99.7, 885.0], [99.8, 887.0], [99.9, 893.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "maxY": 175.0, "series": [{"data": [[0.0, 92.0], [300.0, 167.0], [600.0, 142.0], [700.0, 143.0], [200.0, 65.0], [400.0, 175.0], [100.0, 72.0], [800.0, 101.0], [500.0, 43.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1000.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1000.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 831.482999999999, "minX": 1.68543894E12, "maxY": 831.482999999999, "series": [{"data": [[1.68543894E12, 831.482999999999]], "isOverall": false, "label": "Prueba_Rendimiento", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68543894E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 0.9714285714285714, "minX": 1.0, "maxY": 887.0, "series": [{"data": [[2.0, 4.173913043478261], [672.0, 3.0], [700.0, 32.0], [714.0, 28.0], [797.0, 445.0], [793.0, 507.0], [3.0, 4.0], [806.0, 867.0], [829.0, 656.0], [826.0, 720.0], [823.0, 723.0], [820.0, 666.0], [817.0, 880.0], [815.0, 880.0], [812.0, 848.0], [809.0, 661.0], [803.0, 887.0], [800.0, 666.0], [859.0, 715.0], [863.0, 714.0], [862.0, 713.0], [861.0, 649.0], [843.0, 631.0], [835.0, 718.0], [833.0, 366.5], [841.0, 651.0], [840.0, 8.0], [839.0, 718.0], [838.0, 9.0], [881.0, 449.9719101123596], [894.0, 376.0], [893.0, 566.0], [888.0, 677.0], [891.0, 260.0], [868.0, 457.0], [866.0, 713.0], [864.0, 706.5958702064895], [882.0, 412.92857142857144], [883.0, 419.0], [886.0, 417.0], [887.0, 282.5], [885.0, 522.0], [914.0, 490.0], [927.0, 287.63461538461536], [922.0, 452.02941176470597], [917.0, 422.0], [916.0, 610.0], [915.0, 612.0], [913.0, 643.0], [912.0, 538.0], [906.0, 633.0], [899.0, 610.0], [926.0, 392.25], [928.0, 194.75], [87.0, 4.0], [199.0, 11.0], [1.0, 0.9714285714285714], [431.0, 15.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[831.482999999999, 474.8620000000007]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 928.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.68543894E12, "maxY": 45216.666666666664, "series": [{"data": [[1.68543894E12, 45216.666666666664]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68543894E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68543894E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 474.8620000000007, "minX": 1.68543894E12, "maxY": 474.8620000000007, "series": [{"data": [[1.68543894E12, 474.8620000000007]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68543894E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.68543894E12, "maxY": 4.9E-324, "series": [{"data": [[1.68543894E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68543894E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 472.9560000000003, "minX": 1.68543894E12, "maxY": 472.9560000000003, "series": [{"data": [[1.68543894E12, 472.9560000000003]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68543894E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 344.0, "minX": 344.0, "maxY": 637.0, "series": [{"data": [[656.0, 637.0], [344.0, 344.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 656.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 344.0, "maxY": 4.9E-324, "series": [{"data": [[656.0, 0.0], [344.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 656.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68543894E12, "maxY": 16.666666666666668, "series": [{"data": [[1.68543894E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68543894E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68543894E12, "maxY": 16.666666666666668, "series": [{"data": [[1.68543894E12, 16.666666666666668]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68543894E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68543894E12, "maxY": 16.666666666666668, "series": [{"data": [[1.68543894E12, 16.666666666666668]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68543894E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.68543894E12, "maxY": 16.666666666666668, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68543894E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68543894E12, "title": "Total Transactions Per Second"}},
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

