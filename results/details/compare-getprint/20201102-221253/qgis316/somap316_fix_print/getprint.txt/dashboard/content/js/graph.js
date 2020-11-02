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
        data: {"result": {"minY": 156.0, "minX": 0.0, "maxY": 32265.0, "series": [{"data": [[0.0, 156.0], [0.1, 156.0], [0.2, 156.0], [0.3, 156.0], [0.4, 156.0], [0.5, 156.0], [0.6, 156.0], [0.7, 156.0], [0.8, 156.0], [0.9, 173.0], [1.0, 173.0], [1.1, 173.0], [1.2, 173.0], [1.3, 173.0], [1.4, 173.0], [1.5, 173.0], [1.6, 173.0], [1.7, 173.0], [1.8, 216.0], [1.9, 216.0], [2.0, 216.0], [2.1, 216.0], [2.2, 216.0], [2.3, 216.0], [2.4, 216.0], [2.5, 216.0], [2.6, 216.0], [2.7, 356.0], [2.8, 356.0], [2.9, 356.0], [3.0, 356.0], [3.1, 356.0], [3.2, 356.0], [3.3, 356.0], [3.4, 356.0], [3.5, 356.0], [3.6, 357.0], [3.7, 357.0], [3.8, 357.0], [3.9, 357.0], [4.0, 357.0], [4.1, 357.0], [4.2, 357.0], [4.3, 357.0], [4.4, 357.0], [4.5, 367.0], [4.6, 367.0], [4.7, 367.0], [4.8, 367.0], [4.9, 367.0], [5.0, 367.0], [5.1, 367.0], [5.2, 367.0], [5.3, 367.0], [5.4, 367.0], [5.5, 367.0], [5.6, 367.0], [5.7, 367.0], [5.8, 367.0], [5.9, 367.0], [6.0, 367.0], [6.1, 367.0], [6.2, 367.0], [6.3, 370.0], [6.4, 370.0], [6.5, 370.0], [6.6, 370.0], [6.7, 370.0], [6.8, 370.0], [6.9, 370.0], [7.0, 370.0], [7.1, 370.0], [7.2, 372.0], [7.3, 372.0], [7.4, 372.0], [7.5, 372.0], [7.6, 372.0], [7.7, 372.0], [7.8, 372.0], [7.9, 372.0], [8.0, 372.0], [8.1, 375.0], [8.2, 375.0], [8.3, 375.0], [8.4, 375.0], [8.5, 375.0], [8.6, 375.0], [8.7, 375.0], [8.8, 375.0], [8.9, 375.0], [9.0, 383.0], [9.1, 383.0], [9.2, 383.0], [9.3, 383.0], [9.4, 383.0], [9.5, 383.0], [9.6, 383.0], [9.7, 383.0], [9.8, 383.0], [9.9, 385.0], [10.0, 385.0], [10.1, 385.0], [10.2, 385.0], [10.3, 385.0], [10.4, 385.0], [10.5, 385.0], [10.6, 385.0], [10.7, 385.0], [10.8, 386.0], [10.9, 386.0], [11.0, 386.0], [11.1, 386.0], [11.2, 386.0], [11.3, 386.0], [11.4, 386.0], [11.5, 386.0], [11.6, 386.0], [11.7, 394.0], [11.8, 394.0], [11.9, 394.0], [12.0, 394.0], [12.1, 394.0], [12.2, 394.0], [12.3, 394.0], [12.4, 394.0], [12.5, 395.0], [12.6, 395.0], [12.7, 395.0], [12.8, 395.0], [12.9, 395.0], [13.0, 395.0], [13.1, 395.0], [13.2, 395.0], [13.3, 395.0], [13.4, 395.0], [13.5, 395.0], [13.6, 395.0], [13.7, 395.0], [13.8, 395.0], [13.9, 395.0], [14.0, 395.0], [14.1, 395.0], [14.2, 395.0], [14.3, 396.0], [14.4, 396.0], [14.5, 396.0], [14.6, 396.0], [14.7, 396.0], [14.8, 396.0], [14.9, 396.0], [15.0, 396.0], [15.1, 396.0], [15.2, 397.0], [15.3, 397.0], [15.4, 397.0], [15.5, 397.0], [15.6, 397.0], [15.7, 397.0], [15.8, 397.0], [15.9, 397.0], [16.0, 397.0], [16.1, 401.0], [16.2, 401.0], [16.3, 401.0], [16.4, 401.0], [16.5, 401.0], [16.6, 401.0], [16.7, 401.0], [16.8, 401.0], [16.9, 401.0], [17.0, 411.0], [17.1, 411.0], [17.2, 411.0], [17.3, 411.0], [17.4, 411.0], [17.5, 411.0], [17.6, 411.0], [17.7, 411.0], [17.8, 411.0], [17.9, 418.0], [18.0, 418.0], [18.1, 418.0], [18.2, 418.0], [18.3, 418.0], [18.4, 418.0], [18.5, 418.0], [18.6, 418.0], [18.7, 418.0], [18.8, 418.0], [18.9, 418.0], [19.0, 418.0], [19.1, 418.0], [19.2, 418.0], [19.3, 418.0], [19.4, 418.0], [19.5, 418.0], [19.6, 418.0], [19.7, 422.0], [19.8, 422.0], [19.9, 422.0], [20.0, 422.0], [20.1, 422.0], [20.2, 422.0], [20.3, 422.0], [20.4, 422.0], [20.5, 422.0], [20.6, 422.0], [20.7, 422.0], [20.8, 422.0], [20.9, 422.0], [21.0, 422.0], [21.1, 422.0], [21.2, 422.0], [21.3, 422.0], [21.4, 422.0], [21.5, 429.0], [21.6, 429.0], [21.7, 429.0], [21.8, 429.0], [21.9, 429.0], [22.0, 429.0], [22.1, 429.0], [22.2, 429.0], [22.3, 429.0], [22.4, 436.0], [22.5, 436.0], [22.6, 436.0], [22.7, 436.0], [22.8, 436.0], [22.9, 436.0], [23.0, 436.0], [23.1, 436.0], [23.2, 436.0], [23.3, 437.0], [23.4, 437.0], [23.5, 437.0], [23.6, 437.0], [23.7, 437.0], [23.8, 437.0], [23.9, 437.0], [24.0, 437.0], [24.1, 437.0], [24.2, 438.0], [24.3, 438.0], [24.4, 438.0], [24.5, 438.0], [24.6, 438.0], [24.7, 438.0], [24.8, 438.0], [24.9, 438.0], [25.0, 439.0], [25.1, 439.0], [25.2, 439.0], [25.3, 439.0], [25.4, 439.0], [25.5, 439.0], [25.6, 439.0], [25.7, 439.0], [25.8, 439.0], [25.9, 449.0], [26.0, 449.0], [26.1, 449.0], [26.2, 449.0], [26.3, 449.0], [26.4, 449.0], [26.5, 449.0], [26.6, 449.0], [26.7, 449.0], [26.8, 450.0], [26.9, 450.0], [27.0, 450.0], [27.1, 450.0], [27.2, 450.0], [27.3, 450.0], [27.4, 450.0], [27.5, 450.0], [27.6, 450.0], [27.7, 454.0], [27.8, 454.0], [27.9, 454.0], [28.0, 454.0], [28.1, 454.0], [28.2, 454.0], [28.3, 454.0], [28.4, 454.0], [28.5, 454.0], [28.6, 457.0], [28.7, 457.0], [28.8, 457.0], [28.9, 457.0], [29.0, 457.0], [29.1, 457.0], [29.2, 457.0], [29.3, 457.0], [29.4, 457.0], [29.5, 457.0], [29.6, 457.0], [29.7, 457.0], [29.8, 457.0], [29.9, 457.0], [30.0, 457.0], [30.1, 457.0], [30.2, 457.0], [30.3, 457.0], [30.4, 457.0], [30.5, 457.0], [30.6, 457.0], [30.7, 457.0], [30.8, 457.0], [30.9, 457.0], [31.0, 457.0], [31.1, 457.0], [31.2, 457.0], [31.3, 460.0], [31.4, 460.0], [31.5, 460.0], [31.6, 460.0], [31.7, 460.0], [31.8, 460.0], [31.9, 460.0], [32.0, 460.0], [32.1, 460.0], [32.2, 473.0], [32.3, 473.0], [32.4, 473.0], [32.5, 473.0], [32.6, 473.0], [32.7, 473.0], [32.8, 473.0], [32.9, 473.0], [33.0, 473.0], [33.1, 482.0], [33.2, 482.0], [33.3, 482.0], [33.4, 482.0], [33.5, 482.0], [33.6, 482.0], [33.7, 482.0], [33.8, 482.0], [33.9, 482.0], [34.0, 488.0], [34.1, 488.0], [34.2, 488.0], [34.3, 488.0], [34.4, 488.0], [34.5, 488.0], [34.6, 488.0], [34.7, 488.0], [34.8, 488.0], [34.9, 497.0], [35.0, 497.0], [35.1, 497.0], [35.2, 497.0], [35.3, 497.0], [35.4, 497.0], [35.5, 497.0], [35.6, 497.0], [35.7, 497.0], [35.8, 499.0], [35.9, 499.0], [36.0, 499.0], [36.1, 499.0], [36.2, 499.0], [36.3, 499.0], [36.4, 499.0], [36.5, 499.0], [36.6, 499.0], [36.7, 506.0], [36.8, 506.0], [36.9, 506.0], [37.0, 506.0], [37.1, 506.0], [37.2, 506.0], [37.3, 506.0], [37.4, 506.0], [37.5, 506.0], [37.6, 508.0], [37.7, 508.0], [37.8, 508.0], [37.9, 508.0], [38.0, 508.0], [38.1, 508.0], [38.2, 508.0], [38.3, 508.0], [38.4, 515.0], [38.5, 515.0], [38.6, 515.0], [38.7, 515.0], [38.8, 515.0], [38.9, 515.0], [39.0, 515.0], [39.1, 515.0], [39.2, 515.0], [39.3, 516.0], [39.4, 516.0], [39.5, 516.0], [39.6, 516.0], [39.7, 516.0], [39.8, 516.0], [39.9, 516.0], [40.0, 516.0], [40.1, 516.0], [40.2, 517.0], [40.3, 517.0], [40.4, 517.0], [40.5, 517.0], [40.6, 517.0], [40.7, 517.0], [40.8, 517.0], [40.9, 517.0], [41.0, 517.0], [41.1, 523.0], [41.2, 523.0], [41.3, 523.0], [41.4, 523.0], [41.5, 523.0], [41.6, 523.0], [41.7, 523.0], [41.8, 523.0], [41.9, 523.0], [42.0, 525.0], [42.1, 525.0], [42.2, 525.0], [42.3, 525.0], [42.4, 525.0], [42.5, 525.0], [42.6, 525.0], [42.7, 525.0], [42.8, 525.0], [42.9, 525.0], [43.0, 525.0], [43.1, 525.0], [43.2, 525.0], [43.3, 525.0], [43.4, 525.0], [43.5, 525.0], [43.6, 525.0], [43.7, 525.0], [43.8, 525.0], [43.9, 525.0], [44.0, 525.0], [44.1, 525.0], [44.2, 525.0], [44.3, 525.0], [44.4, 525.0], [44.5, 525.0], [44.6, 525.0], [44.7, 526.0], [44.8, 526.0], [44.9, 526.0], [45.0, 526.0], [45.1, 526.0], [45.2, 526.0], [45.3, 526.0], [45.4, 526.0], [45.5, 526.0], [45.6, 535.0], [45.7, 535.0], [45.8, 535.0], [45.9, 535.0], [46.0, 535.0], [46.1, 535.0], [46.2, 535.0], [46.3, 535.0], [46.4, 535.0], [46.5, 535.0], [46.6, 535.0], [46.7, 535.0], [46.8, 535.0], [46.9, 535.0], [47.0, 535.0], [47.1, 535.0], [47.2, 535.0], [47.3, 535.0], [47.4, 539.0], [47.5, 539.0], [47.6, 539.0], [47.7, 539.0], [47.8, 539.0], [47.9, 539.0], [48.0, 539.0], [48.1, 539.0], [48.2, 539.0], [48.3, 541.0], [48.4, 541.0], [48.5, 541.0], [48.6, 541.0], [48.7, 541.0], [48.8, 541.0], [48.9, 541.0], [49.0, 541.0], [49.1, 541.0], [49.2, 549.0], [49.3, 549.0], [49.4, 549.0], [49.5, 549.0], [49.6, 549.0], [49.7, 549.0], [49.8, 549.0], [49.9, 549.0], [50.0, 549.0], [50.1, 551.0], [50.2, 551.0], [50.3, 551.0], [50.4, 551.0], [50.5, 551.0], [50.6, 551.0], [50.7, 551.0], [50.8, 551.0], [50.9, 552.0], [51.0, 552.0], [51.1, 552.0], [51.2, 552.0], [51.3, 552.0], [51.4, 552.0], [51.5, 552.0], [51.6, 552.0], [51.7, 552.0], [51.8, 553.0], [51.9, 553.0], [52.0, 553.0], [52.1, 553.0], [52.2, 553.0], [52.3, 553.0], [52.4, 553.0], [52.5, 553.0], [52.6, 553.0], [52.7, 557.0], [52.8, 557.0], [52.9, 557.0], [53.0, 557.0], [53.1, 557.0], [53.2, 557.0], [53.3, 557.0], [53.4, 557.0], [53.5, 557.0], [53.6, 559.0], [53.7, 559.0], [53.8, 559.0], [53.9, 559.0], [54.0, 559.0], [54.1, 559.0], [54.2, 559.0], [54.3, 559.0], [54.4, 559.0], [54.5, 573.0], [54.6, 573.0], [54.7, 573.0], [54.8, 573.0], [54.9, 573.0], [55.0, 573.0], [55.1, 573.0], [55.2, 573.0], [55.3, 573.0], [55.4, 576.0], [55.5, 576.0], [55.6, 576.0], [55.7, 576.0], [55.8, 576.0], [55.9, 576.0], [56.0, 576.0], [56.1, 576.0], [56.2, 576.0], [56.3, 585.0], [56.4, 585.0], [56.5, 585.0], [56.6, 585.0], [56.7, 585.0], [56.8, 585.0], [56.9, 585.0], [57.0, 585.0], [57.1, 585.0], [57.2, 605.0], [57.3, 605.0], [57.4, 605.0], [57.5, 605.0], [57.6, 605.0], [57.7, 605.0], [57.8, 605.0], [57.9, 605.0], [58.0, 605.0], [58.1, 614.0], [58.2, 614.0], [58.3, 614.0], [58.4, 614.0], [58.5, 614.0], [58.6, 614.0], [58.7, 614.0], [58.8, 614.0], [58.9, 614.0], [59.0, 615.0], [59.1, 615.0], [59.2, 615.0], [59.3, 615.0], [59.4, 615.0], [59.5, 615.0], [59.6, 615.0], [59.7, 615.0], [59.8, 615.0], [59.9, 619.0], [60.0, 619.0], [60.1, 619.0], [60.2, 619.0], [60.3, 619.0], [60.4, 619.0], [60.5, 619.0], [60.6, 619.0], [60.7, 619.0], [60.8, 623.0], [60.9, 623.0], [61.0, 623.0], [61.1, 623.0], [61.2, 623.0], [61.3, 623.0], [61.4, 623.0], [61.5, 623.0], [61.6, 623.0], [61.7, 634.0], [61.8, 634.0], [61.9, 634.0], [62.0, 634.0], [62.1, 634.0], [62.2, 634.0], [62.3, 634.0], [62.4, 634.0], [62.5, 634.0], [62.6, 635.0], [62.7, 635.0], [62.8, 635.0], [62.9, 635.0], [63.0, 635.0], [63.1, 635.0], [63.2, 635.0], [63.3, 635.0], [63.4, 637.0], [63.5, 637.0], [63.6, 637.0], [63.7, 637.0], [63.8, 637.0], [63.9, 637.0], [64.0, 637.0], [64.1, 637.0], [64.2, 637.0], [64.3, 639.0], [64.4, 639.0], [64.5, 639.0], [64.6, 639.0], [64.7, 639.0], [64.8, 639.0], [64.9, 639.0], [65.0, 639.0], [65.1, 639.0], [65.2, 654.0], [65.3, 654.0], [65.4, 654.0], [65.5, 654.0], [65.6, 654.0], [65.7, 654.0], [65.8, 654.0], [65.9, 654.0], [66.0, 654.0], [66.1, 660.0], [66.2, 660.0], [66.3, 660.0], [66.4, 660.0], [66.5, 660.0], [66.6, 660.0], [66.7, 660.0], [66.8, 660.0], [66.9, 660.0], [67.0, 667.0], [67.1, 667.0], [67.2, 667.0], [67.3, 667.0], [67.4, 667.0], [67.5, 667.0], [67.6, 667.0], [67.7, 667.0], [67.8, 667.0], [67.9, 699.0], [68.0, 699.0], [68.1, 699.0], [68.2, 699.0], [68.3, 699.0], [68.4, 699.0], [68.5, 699.0], [68.6, 699.0], [68.7, 699.0], [68.8, 710.0], [68.9, 710.0], [69.0, 710.0], [69.1, 710.0], [69.2, 710.0], [69.3, 710.0], [69.4, 710.0], [69.5, 710.0], [69.6, 710.0], [69.7, 717.0], [69.8, 717.0], [69.9, 717.0], [70.0, 717.0], [70.1, 717.0], [70.2, 717.0], [70.3, 717.0], [70.4, 717.0], [70.5, 717.0], [70.6, 727.0], [70.7, 727.0], [70.8, 727.0], [70.9, 727.0], [71.0, 727.0], [71.1, 727.0], [71.2, 727.0], [71.3, 727.0], [71.4, 727.0], [71.5, 730.0], [71.6, 730.0], [71.7, 730.0], [71.8, 730.0], [71.9, 730.0], [72.0, 730.0], [72.1, 730.0], [72.2, 730.0], [72.3, 730.0], [72.4, 735.0], [72.5, 735.0], [72.6, 735.0], [72.7, 735.0], [72.8, 735.0], [72.9, 735.0], [73.0, 735.0], [73.1, 735.0], [73.2, 735.0], [73.3, 812.0], [73.4, 812.0], [73.5, 812.0], [73.6, 812.0], [73.7, 812.0], [73.8, 812.0], [73.9, 812.0], [74.0, 812.0], [74.1, 812.0], [74.2, 937.0], [74.3, 937.0], [74.4, 937.0], [74.5, 937.0], [74.6, 937.0], [74.7, 937.0], [74.8, 937.0], [74.9, 937.0], [75.0, 937.0], [75.1, 955.0], [75.2, 955.0], [75.3, 955.0], [75.4, 955.0], [75.5, 955.0], [75.6, 955.0], [75.7, 955.0], [75.8, 955.0], [75.9, 957.0], [76.0, 957.0], [76.1, 957.0], [76.2, 957.0], [76.3, 957.0], [76.4, 957.0], [76.5, 957.0], [76.6, 957.0], [76.7, 957.0], [76.8, 1112.0], [76.9, 1112.0], [77.0, 1112.0], [77.1, 1112.0], [77.2, 1112.0], [77.3, 1112.0], [77.4, 1112.0], [77.5, 1112.0], [77.6, 1112.0], [77.7, 1120.0], [77.8, 1120.0], [77.9, 1120.0], [78.0, 1120.0], [78.1, 1120.0], [78.2, 1120.0], [78.3, 1120.0], [78.4, 1120.0], [78.5, 1120.0], [78.6, 1121.0], [78.7, 1121.0], [78.8, 1121.0], [78.9, 1121.0], [79.0, 1121.0], [79.1, 1121.0], [79.2, 1121.0], [79.3, 1121.0], [79.4, 1121.0], [79.5, 1121.0], [79.6, 1121.0], [79.7, 1121.0], [79.8, 1121.0], [79.9, 1121.0], [80.0, 1121.0], [80.1, 1121.0], [80.2, 1121.0], [80.3, 1121.0], [80.4, 1122.0], [80.5, 1122.0], [80.6, 1122.0], [80.7, 1122.0], [80.8, 1122.0], [80.9, 1122.0], [81.0, 1122.0], [81.1, 1122.0], [81.2, 1122.0], [81.3, 1148.0], [81.4, 1148.0], [81.5, 1148.0], [81.6, 1148.0], [81.7, 1148.0], [81.8, 1148.0], [81.9, 1148.0], [82.0, 1148.0], [82.1, 1148.0], [82.2, 1158.0], [82.3, 1158.0], [82.4, 1158.0], [82.5, 1158.0], [82.6, 1158.0], [82.7, 1158.0], [82.8, 1158.0], [82.9, 1158.0], [83.0, 1158.0], [83.1, 1193.0], [83.2, 1193.0], [83.3, 1193.0], [83.4, 1193.0], [83.5, 1193.0], [83.6, 1193.0], [83.7, 1193.0], [83.8, 1193.0], [83.9, 1193.0], [84.0, 1215.0], [84.1, 1215.0], [84.2, 1215.0], [84.3, 1215.0], [84.4, 1215.0], [84.5, 1215.0], [84.6, 1215.0], [84.7, 1215.0], [84.8, 1215.0], [84.9, 1293.0], [85.0, 1293.0], [85.1, 1293.0], [85.2, 1293.0], [85.3, 1293.0], [85.4, 1293.0], [85.5, 1293.0], [85.6, 1293.0], [85.7, 1293.0], [85.8, 1315.0], [85.9, 1315.0], [86.0, 1315.0], [86.1, 1315.0], [86.2, 1315.0], [86.3, 1315.0], [86.4, 1315.0], [86.5, 1315.0], [86.6, 1315.0], [86.7, 1330.0], [86.8, 1330.0], [86.9, 1330.0], [87.0, 1330.0], [87.1, 1330.0], [87.2, 1330.0], [87.3, 1330.0], [87.4, 1330.0], [87.5, 1331.0], [87.6, 1331.0], [87.7, 1331.0], [87.8, 1331.0], [87.9, 1331.0], [88.0, 1331.0], [88.1, 1331.0], [88.2, 1331.0], [88.3, 1331.0], [88.4, 1344.0], [88.5, 1344.0], [88.6, 1344.0], [88.7, 1344.0], [88.8, 1344.0], [88.9, 1344.0], [89.0, 1344.0], [89.1, 1344.0], [89.2, 1344.0], [89.3, 1374.0], [89.4, 1374.0], [89.5, 1374.0], [89.6, 1374.0], [89.7, 1374.0], [89.8, 1374.0], [89.9, 1374.0], [90.0, 1374.0], [90.1, 1374.0], [90.2, 1531.0], [90.3, 1531.0], [90.4, 1531.0], [90.5, 1531.0], [90.6, 1531.0], [90.7, 1531.0], [90.8, 1531.0], [90.9, 1531.0], [91.0, 1531.0], [91.1, 1645.0], [91.2, 1645.0], [91.3, 1645.0], [91.4, 1645.0], [91.5, 1645.0], [91.6, 1645.0], [91.7, 1645.0], [91.8, 1645.0], [91.9, 1645.0], [92.0, 1996.0], [92.1, 1996.0], [92.2, 1996.0], [92.3, 1996.0], [92.4, 1996.0], [92.5, 1996.0], [92.6, 1996.0], [92.7, 1996.0], [92.8, 1996.0], [92.9, 31415.0], [93.0, 31415.0], [93.1, 31415.0], [93.2, 31415.0], [93.3, 31415.0], [93.4, 31415.0], [93.5, 31415.0], [93.6, 31415.0], [93.7, 31415.0], [93.8, 31690.0], [93.9, 31690.0], [94.0, 31690.0], [94.1, 31690.0], [94.2, 31690.0], [94.3, 31690.0], [94.4, 31690.0], [94.5, 31690.0], [94.6, 31690.0], [94.7, 31843.0], [94.8, 31843.0], [94.9, 31843.0], [95.0, 31843.0], [95.1, 31843.0], [95.2, 31843.0], [95.3, 31843.0], [95.4, 31843.0], [95.5, 31843.0], [95.6, 31906.0], [95.7, 31906.0], [95.8, 31906.0], [95.9, 31906.0], [96.0, 31906.0], [96.1, 31906.0], [96.2, 31906.0], [96.3, 31906.0], [96.4, 31906.0], [96.5, 31917.0], [96.6, 31917.0], [96.7, 31917.0], [96.8, 31917.0], [96.9, 31917.0], [97.0, 31917.0], [97.1, 31917.0], [97.2, 31917.0], [97.3, 31917.0], [97.4, 32132.0], [97.5, 32132.0], [97.6, 32132.0], [97.7, 32132.0], [97.8, 32132.0], [97.9, 32132.0], [98.0, 32132.0], [98.1, 32132.0], [98.2, 32132.0], [98.3, 32212.0], [98.4, 32212.0], [98.5, 32212.0], [98.6, 32212.0], [98.7, 32212.0], [98.8, 32212.0], [98.9, 32212.0], [99.0, 32212.0], [99.1, 32212.0], [99.2, 32265.0], [99.3, 32265.0], [99.4, 32265.0], [99.5, 32265.0], [99.6, 32265.0], [99.7, 32265.0], [99.8, 32265.0], [99.9, 32265.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 23.0, "series": [{"data": [[600.0, 13.0], [700.0, 5.0], [800.0, 1.0], [200.0, 1.0], [900.0, 3.0], [1100.0, 8.0], [300.0, 15.0], [1200.0, 2.0], [1300.0, 5.0], [1500.0, 1.0], [400.0, 23.0], [1600.0, 1.0], [100.0, 2.0], [1900.0, 1.0], [31400.0, 1.0], [31600.0, 1.0], [500.0, 23.0], [31900.0, 2.0], [32200.0, 2.0], [32100.0, 1.0], [31800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 32200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 60.0, "series": [{"data": [[0.0, 41.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 60.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.6043556E12, "maxY": 9.736363636363631, "series": [{"data": [[1.60435566E12, 1.5], [1.6043556E12, 9.736363636363631]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435566E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
        data: {"result": {"minY": 395.0, "minX": 1.0, "maxY": 32265.0, "series": [{"data": [[8.0, 31690.0], [4.0, 1112.0], [2.0, 1330.0], [1.0, 1996.0], [9.0, 436.0], [10.0, 1862.21568627451], [5.0, 32265.0], [6.0, 31843.0], [3.0, 395.0], [7.0, 31906.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.589285714285708, 2887.0982142857133]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 24.3, "minX": 1.6043556E12, "maxY": 335539.0333333333, "series": [{"data": [[1.60435566E12, 56172.2], [1.6043556E12, 335539.0333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60435566E12, 24.3], [1.6043556E12, 1456.6333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435566E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
        data: {"result": {"minY": 1663.0, "minX": 1.6043556E12, "maxY": 2909.3545454545447, "series": [{"data": [[1.60435566E12, 1663.0], [1.6043556E12, 2909.3545454545447]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435566E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
        data: {"result": {"minY": 1649.5, "minX": 1.6043556E12, "maxY": 2908.1818181818185, "series": [{"data": [[1.60435566E12, 1649.5], [1.6043556E12, 2908.1818181818185]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435566E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
        data: {"result": {"minY": 0.0, "minX": 1.6043556E12, "maxY": 1.0727272727272728, "series": [{"data": [[1.60435566E12, 0.0], [1.6043556E12, 1.0727272727272728]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435566E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
        data: {"result": {"minY": 156.0, "minX": 1.6043556E12, "maxY": 32265.0, "series": [{"data": [[1.60435566E12, 1996.0], [1.6043556E12, 32265.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60435566E12, 1330.0], [1.6043556E12, 156.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60435566E12, 1330.0], [1.6043556E12, 157.68130017995836]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60435566E12, 1330.0], [1.6043556E12, 156.92649977505206]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60435566E12, 1330.0], [1.6043556E12, 156.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60435566E12, 1663.0], [1.6043556E12, 545.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435566E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
    data: {"result": {"minY": 394.0, "minX": 1.0, "maxY": 31552.5, "series": [{"data": [[4.0, 530.5], [1.0, 615.0], [2.0, 1037.5], [5.0, 394.0], [3.0, 627.0], [6.0, 406.5], [14.0, 31552.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 394.0, "minX": 1.0, "maxY": 31551.0, "series": [{"data": [[4.0, 529.0], [1.0, 614.0], [2.0, 1034.0], [5.0, 394.0], [3.0, 625.5], [6.0, 406.0], [14.0, 31551.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.8666666666666667, "minX": 1.6043556E12, "maxY": 1.8666666666666667, "series": [{"data": [[1.6043556E12, 1.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6043556E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6043556E12, "maxY": 1.8333333333333333, "series": [{"data": [[1.60435566E12, 0.03333333333333333], [1.6043556E12, 1.8333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60435566E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6043556E12, "maxY": 1.8333333333333333, "series": [{"data": [[1.60435566E12, 0.03333333333333333], [1.6043556E12, 1.8333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435566E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.6043556E12, "maxY": 1.8333333333333333, "series": [{"data": [[1.60435566E12, 0.03333333333333333], [1.6043556E12, 1.8333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60435566E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 0);
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

