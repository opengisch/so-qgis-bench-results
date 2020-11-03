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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 2778.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 7.0], [0.3, 8.0], [0.4, 8.0], [0.5, 9.0], [0.6, 10.0], [0.7, 11.0], [0.8, 11.0], [0.9, 12.0], [1.0, 17.0], [1.1, 18.0], [1.2, 18.0], [1.3, 20.0], [1.4, 20.0], [1.5, 21.0], [1.6, 21.0], [1.7, 21.0], [1.8, 22.0], [1.9, 22.0], [2.0, 22.0], [2.1, 23.0], [2.2, 23.0], [2.3, 23.0], [2.4, 24.0], [2.5, 26.0], [2.6, 26.0], [2.7, 26.0], [2.8, 29.0], [2.9, 31.0], [3.0, 36.0], [3.1, 36.0], [3.2, 37.0], [3.3, 42.0], [3.4, 42.0], [3.5, 43.0], [3.6, 44.0], [3.7, 60.0], [3.8, 60.0], [3.9, 71.0], [4.0, 87.0], [4.1, 91.0], [4.2, 91.0], [4.3, 94.0], [4.4, 98.0], [4.5, 98.0], [4.6, 98.0], [4.7, 100.0], [4.8, 100.0], [4.9, 101.0], [5.0, 101.0], [5.1, 101.0], [5.2, 102.0], [5.3, 102.0], [5.4, 103.0], [5.5, 103.0], [5.6, 104.0], [5.7, 104.0], [5.8, 105.0], [5.9, 105.0], [6.0, 109.0], [6.1, 109.0], [6.2, 112.0], [6.3, 113.0], [6.4, 115.0], [6.5, 115.0], [6.6, 115.0], [6.7, 116.0], [6.8, 116.0], [6.9, 116.0], [7.0, 121.0], [7.1, 124.0], [7.2, 124.0], [7.3, 127.0], [7.4, 127.0], [7.5, 130.0], [7.6, 130.0], [7.7, 133.0], [7.8, 136.0], [7.9, 136.0], [8.0, 136.0], [8.1, 139.0], [8.2, 143.0], [8.3, 147.0], [8.4, 147.0], [8.5, 152.0], [8.6, 164.0], [8.7, 164.0], [8.8, 171.0], [8.9, 172.0], [9.0, 179.0], [9.1, 179.0], [9.2, 181.0], [9.3, 186.0], [9.4, 187.0], [9.5, 187.0], [9.6, 189.0], [9.7, 192.0], [9.8, 193.0], [9.9, 193.0], [10.0, 196.0], [10.1, 198.0], [10.2, 198.0], [10.3, 198.0], [10.4, 198.0], [10.5, 199.0], [10.6, 199.0], [10.7, 199.0], [10.8, 200.0], [10.9, 201.0], [11.0, 201.0], [11.1, 201.0], [11.2, 202.0], [11.3, 202.0], [11.4, 202.0], [11.5, 205.0], [11.6, 207.0], [11.7, 207.0], [11.8, 209.0], [11.9, 209.0], [12.0, 209.0], [12.1, 209.0], [12.2, 209.0], [12.3, 209.0], [12.4, 212.0], [12.5, 212.0], [12.6, 212.0], [12.7, 213.0], [12.8, 213.0], [12.9, 213.0], [13.0, 214.0], [13.1, 214.0], [13.2, 214.0], [13.3, 214.0], [13.4, 215.0], [13.5, 215.0], [13.6, 215.0], [13.7, 217.0], [13.8, 218.0], [13.9, 219.0], [14.0, 219.0], [14.1, 220.0], [14.2, 221.0], [14.3, 222.0], [14.4, 222.0], [14.5, 222.0], [14.6, 222.0], [14.7, 225.0], [14.8, 225.0], [14.9, 226.0], [15.0, 227.0], [15.1, 227.0], [15.2, 231.0], [15.3, 232.0], [15.4, 233.0], [15.5, 233.0], [15.6, 238.0], [15.7, 239.0], [15.8, 239.0], [15.9, 239.0], [16.0, 240.0], [16.1, 241.0], [16.2, 241.0], [16.3, 241.0], [16.4, 241.0], [16.5, 245.0], [16.6, 246.0], [16.7, 246.0], [16.8, 246.0], [16.9, 246.0], [17.0, 246.0], [17.1, 248.0], [17.2, 248.0], [17.3, 249.0], [17.4, 249.0], [17.5, 252.0], [17.6, 253.0], [17.7, 254.0], [17.8, 254.0], [17.9, 257.0], [18.0, 257.0], [18.1, 258.0], [18.2, 258.0], [18.3, 259.0], [18.4, 260.0], [18.5, 260.0], [18.6, 262.0], [18.7, 262.0], [18.8, 262.0], [18.9, 262.0], [19.0, 265.0], [19.1, 268.0], [19.2, 269.0], [19.3, 269.0], [19.4, 273.0], [19.5, 275.0], [19.6, 275.0], [19.7, 275.0], [19.8, 275.0], [19.9, 276.0], [20.0, 279.0], [20.1, 279.0], [20.2, 280.0], [20.3, 281.0], [20.4, 281.0], [20.5, 282.0], [20.6, 282.0], [20.7, 287.0], [20.8, 287.0], [20.9, 287.0], [21.0, 288.0], [21.1, 289.0], [21.2, 289.0], [21.3, 300.0], [21.4, 302.0], [21.5, 302.0], [21.6, 302.0], [21.7, 317.0], [21.8, 339.0], [21.9, 339.0], [22.0, 346.0], [22.1, 346.0], [22.2, 348.0], [22.3, 348.0], [22.4, 354.0], [22.5, 356.0], [22.6, 364.0], [22.7, 364.0], [22.8, 369.0], [22.9, 370.0], [23.0, 376.0], [23.1, 376.0], [23.2, 376.0], [23.3, 377.0], [23.4, 377.0], [23.5, 381.0], [23.6, 383.0], [23.7, 383.0], [23.8, 383.0], [23.9, 384.0], [24.0, 385.0], [24.1, 385.0], [24.2, 385.0], [24.3, 386.0], [24.4, 387.0], [24.5, 387.0], [24.6, 387.0], [24.7, 388.0], [24.8, 389.0], [24.9, 391.0], [25.0, 391.0], [25.1, 391.0], [25.2, 392.0], [25.3, 392.0], [25.4, 392.0], [25.5, 393.0], [25.6, 393.0], [25.7, 393.0], [25.8, 395.0], [25.9, 396.0], [26.0, 397.0], [26.1, 397.0], [26.2, 397.0], [26.3, 398.0], [26.4, 399.0], [26.5, 399.0], [26.6, 399.0], [26.7, 399.0], [26.8, 399.0], [26.9, 399.0], [27.0, 400.0], [27.1, 400.0], [27.2, 400.0], [27.3, 400.0], [27.4, 400.0], [27.5, 401.0], [27.6, 401.0], [27.7, 402.0], [27.8, 402.0], [27.9, 403.0], [28.0, 403.0], [28.1, 403.0], [28.2, 403.0], [28.3, 403.0], [28.4, 403.0], [28.5, 404.0], [28.6, 404.0], [28.7, 404.0], [28.8, 405.0], [28.9, 405.0], [29.0, 407.0], [29.1, 407.0], [29.2, 408.0], [29.3, 408.0], [29.4, 408.0], [29.5, 408.0], [29.6, 408.0], [29.7, 408.0], [29.8, 409.0], [29.9, 409.0], [30.0, 409.0], [30.1, 409.0], [30.2, 409.0], [30.3, 410.0], [30.4, 410.0], [30.5, 411.0], [30.6, 411.0], [30.7, 411.0], [30.8, 412.0], [30.9, 412.0], [31.0, 412.0], [31.1, 412.0], [31.2, 412.0], [31.3, 414.0], [31.4, 414.0], [31.5, 415.0], [31.6, 416.0], [31.7, 416.0], [31.8, 416.0], [31.9, 419.0], [32.0, 420.0], [32.1, 420.0], [32.2, 421.0], [32.3, 422.0], [32.4, 422.0], [32.5, 422.0], [32.6, 422.0], [32.7, 422.0], [32.8, 423.0], [32.9, 423.0], [33.0, 424.0], [33.1, 425.0], [33.2, 428.0], [33.3, 428.0], [33.4, 428.0], [33.5, 428.0], [33.6, 428.0], [33.7, 428.0], [33.8, 429.0], [33.9, 429.0], [34.0, 429.0], [34.1, 429.0], [34.2, 430.0], [34.3, 430.0], [34.4, 430.0], [34.5, 430.0], [34.6, 431.0], [34.7, 431.0], [34.8, 431.0], [34.9, 432.0], [35.0, 432.0], [35.1, 432.0], [35.2, 432.0], [35.3, 433.0], [35.4, 435.0], [35.5, 435.0], [35.6, 437.0], [35.7, 439.0], [35.8, 440.0], [35.9, 440.0], [36.0, 440.0], [36.1, 441.0], [36.2, 442.0], [36.3, 442.0], [36.4, 444.0], [36.5, 444.0], [36.6, 445.0], [36.7, 445.0], [36.8, 447.0], [36.9, 447.0], [37.0, 447.0], [37.1, 448.0], [37.2, 449.0], [37.3, 449.0], [37.4, 449.0], [37.5, 449.0], [37.6, 451.0], [37.7, 452.0], [37.8, 452.0], [37.9, 454.0], [38.0, 454.0], [38.1, 455.0], [38.2, 455.0], [38.3, 456.0], [38.4, 460.0], [38.5, 460.0], [38.6, 461.0], [38.7, 462.0], [38.8, 465.0], [38.9, 465.0], [39.0, 467.0], [39.1, 468.0], [39.2, 469.0], [39.3, 469.0], [39.4, 472.0], [39.5, 473.0], [39.6, 476.0], [39.7, 476.0], [39.8, 478.0], [39.9, 479.0], [40.0, 480.0], [40.1, 480.0], [40.2, 481.0], [40.3, 484.0], [40.4, 484.0], [40.5, 486.0], [40.6, 486.0], [40.7, 488.0], [40.8, 488.0], [40.9, 494.0], [41.0, 496.0], [41.1, 497.0], [41.2, 497.0], [41.3, 498.0], [41.4, 500.0], [41.5, 504.0], [41.6, 504.0], [41.7, 509.0], [41.8, 509.0], [41.9, 509.0], [42.0, 523.0], [42.1, 524.0], [42.2, 531.0], [42.3, 531.0], [42.4, 534.0], [42.5, 536.0], [42.6, 537.0], [42.7, 537.0], [42.8, 539.0], [42.9, 546.0], [43.0, 548.0], [43.1, 548.0], [43.2, 550.0], [43.3, 555.0], [43.4, 555.0], [43.5, 558.0], [43.6, 559.0], [43.7, 559.0], [43.8, 559.0], [43.9, 559.0], [44.0, 564.0], [44.1, 565.0], [44.2, 565.0], [44.3, 566.0], [44.4, 569.0], [44.5, 575.0], [44.6, 575.0], [44.7, 575.0], [44.8, 576.0], [44.9, 582.0], [45.0, 582.0], [45.1, 584.0], [45.2, 585.0], [45.3, 585.0], [45.4, 586.0], [45.5, 587.0], [45.6, 589.0], [45.7, 589.0], [45.8, 593.0], [45.9, 597.0], [46.0, 598.0], [46.1, 598.0], [46.2, 599.0], [46.3, 602.0], [46.4, 602.0], [46.5, 602.0], [46.6, 603.0], [46.7, 603.0], [46.8, 603.0], [46.9, 603.0], [47.0, 603.0], [47.1, 603.0], [47.2, 603.0], [47.3, 605.0], [47.4, 609.0], [47.5, 610.0], [47.6, 610.0], [47.7, 611.0], [47.8, 611.0], [47.9, 611.0], [48.0, 611.0], [48.1, 616.0], [48.2, 621.0], [48.3, 622.0], [48.4, 622.0], [48.5, 622.0], [48.6, 626.0], [48.7, 626.0], [48.8, 627.0], [48.9, 628.0], [49.0, 628.0], [49.1, 628.0], [49.2, 630.0], [49.3, 630.0], [49.4, 630.0], [49.5, 630.0], [49.6, 630.0], [49.7, 632.0], [49.8, 632.0], [49.9, 632.0], [50.0, 632.0], [50.1, 636.0], [50.2, 636.0], [50.3, 636.0], [50.4, 640.0], [50.5, 642.0], [50.6, 642.0], [50.7, 644.0], [50.8, 651.0], [50.9, 651.0], [51.0, 651.0], [51.1, 652.0], [51.2, 661.0], [51.3, 663.0], [51.4, 663.0], [51.5, 664.0], [51.6, 668.0], [51.7, 668.0], [51.8, 674.0], [51.9, 675.0], [52.0, 676.0], [52.1, 676.0], [52.2, 678.0], [52.3, 680.0], [52.4, 687.0], [52.5, 687.0], [52.6, 693.0], [52.7, 701.0], [52.8, 705.0], [52.9, 705.0], [53.0, 710.0], [53.1, 711.0], [53.2, 721.0], [53.3, 721.0], [53.4, 725.0], [53.5, 731.0], [53.6, 731.0], [53.7, 731.0], [53.8, 738.0], [53.9, 741.0], [54.0, 741.0], [54.1, 745.0], [54.2, 747.0], [54.3, 748.0], [54.4, 748.0], [54.5, 751.0], [54.6, 761.0], [54.7, 764.0], [54.8, 764.0], [54.9, 774.0], [55.0, 775.0], [55.1, 775.0], [55.2, 776.0], [55.3, 778.0], [55.4, 779.0], [55.5, 779.0], [55.6, 788.0], [55.7, 789.0], [55.8, 791.0], [55.9, 791.0], [56.0, 791.0], [56.1, 793.0], [56.2, 793.0], [56.3, 793.0], [56.4, 797.0], [56.5, 798.0], [56.6, 798.0], [56.7, 798.0], [56.8, 798.0], [56.9, 798.0], [57.0, 798.0], [57.1, 802.0], [57.2, 805.0], [57.3, 806.0], [57.4, 806.0], [57.5, 807.0], [57.6, 808.0], [57.7, 808.0], [57.8, 808.0], [57.9, 808.0], [58.0, 808.0], [58.1, 809.0], [58.2, 809.0], [58.3, 812.0], [58.4, 815.0], [58.5, 815.0], [58.6, 815.0], [58.7, 817.0], [58.8, 817.0], [58.9, 817.0], [59.0, 818.0], [59.1, 819.0], [59.2, 820.0], [59.3, 820.0], [59.4, 820.0], [59.5, 821.0], [59.6, 824.0], [59.7, 824.0], [59.8, 825.0], [59.9, 826.0], [60.0, 827.0], [60.1, 827.0], [60.2, 827.0], [60.3, 827.0], [60.4, 827.0], [60.5, 828.0], [60.6, 829.0], [60.7, 830.0], [60.8, 830.0], [60.9, 833.0], [61.0, 833.0], [61.1, 835.0], [61.2, 835.0], [61.3, 836.0], [61.4, 836.0], [61.5, 836.0], [61.6, 836.0], [61.7, 838.0], [61.8, 838.0], [61.9, 838.0], [62.0, 839.0], [62.1, 839.0], [62.2, 840.0], [62.3, 840.0], [62.4, 841.0], [62.5, 841.0], [62.6, 842.0], [62.7, 842.0], [62.8, 842.0], [62.9, 842.0], [63.0, 843.0], [63.1, 843.0], [63.2, 843.0], [63.3, 844.0], [63.4, 844.0], [63.5, 844.0], [63.6, 844.0], [63.7, 845.0], [63.8, 845.0], [63.9, 846.0], [64.0, 846.0], [64.1, 847.0], [64.2, 847.0], [64.3, 847.0], [64.4, 849.0], [64.5, 849.0], [64.6, 849.0], [64.7, 850.0], [64.8, 851.0], [64.9, 852.0], [65.0, 852.0], [65.1, 853.0], [65.2, 855.0], [65.3, 855.0], [65.4, 855.0], [65.5, 856.0], [65.6, 858.0], [65.7, 858.0], [65.8, 859.0], [65.9, 859.0], [66.0, 860.0], [66.1, 860.0], [66.2, 861.0], [66.3, 863.0], [66.4, 863.0], [66.5, 863.0], [66.6, 864.0], [66.7, 866.0], [66.8, 866.0], [66.9, 866.0], [67.0, 867.0], [67.1, 868.0], [67.2, 868.0], [67.3, 868.0], [67.4, 868.0], [67.5, 868.0], [67.6, 868.0], [67.7, 868.0], [67.8, 868.0], [67.9, 869.0], [68.0, 869.0], [68.1, 871.0], [68.2, 872.0], [68.3, 873.0], [68.4, 873.0], [68.5, 873.0], [68.6, 874.0], [68.7, 874.0], [68.8, 874.0], [68.9, 875.0], [69.0, 876.0], [69.1, 876.0], [69.2, 877.0], [69.3, 877.0], [69.4, 877.0], [69.5, 877.0], [69.6, 878.0], [69.7, 878.0], [69.8, 879.0], [69.9, 879.0], [70.0, 880.0], [70.1, 882.0], [70.2, 882.0], [70.3, 882.0], [70.4, 882.0], [70.5, 883.0], [70.6, 883.0], [70.7, 883.0], [70.8, 885.0], [70.9, 886.0], [71.0, 886.0], [71.1, 887.0], [71.2, 887.0], [71.3, 887.0], [71.4, 887.0], [71.5, 887.0], [71.6, 887.0], [71.7, 887.0], [71.8, 888.0], [71.9, 888.0], [72.0, 889.0], [72.1, 889.0], [72.2, 890.0], [72.3, 890.0], [72.4, 890.0], [72.5, 890.0], [72.6, 891.0], [72.7, 892.0], [72.8, 893.0], [72.9, 893.0], [73.0, 894.0], [73.1, 894.0], [73.2, 894.0], [73.3, 894.0], [73.4, 894.0], [73.5, 894.0], [73.6, 894.0], [73.7, 897.0], [73.8, 897.0], [73.9, 900.0], [74.0, 900.0], [74.1, 900.0], [74.2, 901.0], [74.3, 901.0], [74.4, 901.0], [74.5, 902.0], [74.6, 903.0], [74.7, 903.0], [74.8, 903.0], [74.9, 904.0], [75.0, 907.0], [75.1, 907.0], [75.2, 908.0], [75.3, 909.0], [75.4, 909.0], [75.5, 909.0], [75.6, 909.0], [75.7, 910.0], [75.8, 911.0], [75.9, 911.0], [76.0, 911.0], [76.1, 912.0], [76.2, 913.0], [76.3, 913.0], [76.4, 914.0], [76.5, 915.0], [76.6, 915.0], [76.7, 915.0], [76.8, 915.0], [76.9, 917.0], [77.0, 917.0], [77.1, 919.0], [77.2, 919.0], [77.3, 920.0], [77.4, 920.0], [77.5, 920.0], [77.6, 920.0], [77.7, 920.0], [77.8, 920.0], [77.9, 921.0], [78.0, 926.0], [78.1, 926.0], [78.2, 926.0], [78.3, 928.0], [78.4, 929.0], [78.5, 929.0], [78.6, 930.0], [78.7, 931.0], [78.8, 932.0], [78.9, 932.0], [79.0, 933.0], [79.1, 933.0], [79.2, 934.0], [79.3, 934.0], [79.4, 936.0], [79.5, 936.0], [79.6, 937.0], [79.7, 937.0], [79.8, 937.0], [79.9, 938.0], [80.0, 938.0], [80.1, 938.0], [80.2, 941.0], [80.3, 941.0], [80.4, 941.0], [80.5, 942.0], [80.6, 943.0], [80.7, 943.0], [80.8, 943.0], [80.9, 944.0], [81.0, 944.0], [81.1, 945.0], [81.2, 945.0], [81.3, 947.0], [81.4, 947.0], [81.5, 948.0], [81.6, 948.0], [81.7, 948.0], [81.8, 950.0], [81.9, 950.0], [82.0, 951.0], [82.1, 952.0], [82.2, 952.0], [82.3, 952.0], [82.4, 954.0], [82.5, 955.0], [82.6, 957.0], [82.7, 957.0], [82.8, 957.0], [82.9, 957.0], [83.0, 958.0], [83.1, 958.0], [83.2, 958.0], [83.3, 959.0], [83.4, 959.0], [83.5, 959.0], [83.6, 960.0], [83.7, 963.0], [83.8, 963.0], [83.9, 964.0], [84.0, 965.0], [84.1, 967.0], [84.2, 967.0], [84.3, 967.0], [84.4, 967.0], [84.5, 968.0], [84.6, 968.0], [84.7, 969.0], [84.8, 970.0], [84.9, 970.0], [85.0, 970.0], [85.1, 970.0], [85.2, 971.0], [85.3, 971.0], [85.4, 972.0], [85.5, 973.0], [85.6, 974.0], [85.7, 974.0], [85.8, 975.0], [85.9, 975.0], [86.0, 978.0], [86.1, 978.0], [86.2, 978.0], [86.3, 981.0], [86.4, 986.0], [86.5, 986.0], [86.6, 986.0], [86.7, 992.0], [86.8, 992.0], [86.9, 992.0], [87.0, 994.0], [87.1, 994.0], [87.2, 994.0], [87.3, 994.0], [87.4, 996.0], [87.5, 998.0], [87.6, 998.0], [87.7, 999.0], [87.8, 1003.0], [87.9, 1004.0], [88.0, 1004.0], [88.1, 1005.0], [88.2, 1006.0], [88.3, 1008.0], [88.4, 1008.0], [88.5, 1011.0], [88.6, 1013.0], [88.7, 1013.0], [88.8, 1014.0], [88.9, 1015.0], [89.0, 1019.0], [89.1, 1019.0], [89.2, 1020.0], [89.3, 1021.0], [89.4, 1024.0], [89.5, 1024.0], [89.6, 1030.0], [89.7, 1031.0], [89.8, 1033.0], [89.9, 1033.0], [90.0, 1034.0], [90.1, 1036.0], [90.2, 1036.0], [90.3, 1040.0], [90.4, 1042.0], [90.5, 1042.0], [90.6, 1042.0], [90.7, 1045.0], [90.8, 1045.0], [90.9, 1047.0], [91.0, 1047.0], [91.1, 1051.0], [91.2, 1053.0], [91.3, 1055.0], [91.4, 1055.0], [91.5, 1058.0], [91.6, 1065.0], [91.7, 1065.0], [91.8, 1066.0], [91.9, 1069.0], [92.0, 1071.0], [92.1, 1071.0], [92.2, 1071.0], [92.3, 1072.0], [92.4, 1073.0], [92.5, 1073.0], [92.6, 1078.0], [92.7, 1079.0], [92.8, 1081.0], [92.9, 1081.0], [93.0, 1092.0], [93.1, 1093.0], [93.2, 1094.0], [93.3, 1094.0], [93.4, 1097.0], [93.5, 1102.0], [93.6, 1102.0], [93.7, 1106.0], [93.8, 1110.0], [93.9, 1111.0], [94.0, 1111.0], [94.1, 1117.0], [94.2, 1122.0], [94.3, 1127.0], [94.4, 1127.0], [94.5, 1134.0], [94.6, 1152.0], [94.7, 1154.0], [94.8, 1154.0], [94.9, 1164.0], [95.0, 1174.0], [95.1, 1174.0], [95.2, 1174.0], [95.3, 1179.0], [95.4, 1180.0], [95.5, 1180.0], [95.6, 1202.0], [95.7, 1221.0], [95.8, 1240.0], [95.9, 1240.0], [96.0, 1256.0], [96.1, 1258.0], [96.2, 1262.0], [96.3, 1262.0], [96.4, 1268.0], [96.5, 1274.0], [96.6, 1284.0], [96.7, 1284.0], [96.8, 1294.0], [96.9, 1297.0], [97.0, 1297.0], [97.1, 1317.0], [97.2, 1333.0], [97.3, 1371.0], [97.4, 1371.0], [97.5, 1459.0], [97.6, 1526.0], [97.7, 1526.0], [97.8, 1526.0], [97.9, 1573.0], [98.0, 1579.0], [98.1, 1632.0], [98.2, 1632.0], [98.3, 1666.0], [98.4, 1691.0], [98.5, 1691.0], [98.6, 1707.0], [98.7, 1759.0], [98.8, 1787.0], [98.9, 1787.0], [99.0, 1832.0], [99.1, 2045.0], [99.2, 2110.0], [99.3, 2110.0], [99.4, 2394.0], [99.5, 2468.0], [99.6, 2473.0], [99.7, 2473.0], [99.8, 2598.0], [99.9, 2778.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 124.0, "series": [{"data": [[0.0, 34.0], [600.0, 47.0], [700.0, 32.0], [800.0, 124.0], [900.0, 102.0], [1000.0, 42.0], [1100.0, 15.0], [1200.0, 11.0], [1300.0, 3.0], [1400.0, 1.0], [1500.0, 4.0], [100.0, 45.0], [1600.0, 3.0], [1700.0, 3.0], [1800.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 1.0], [2700.0, 1.0], [200.0, 77.0], [300.0, 42.0], [400.0, 106.0], [500.0, 36.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 412.0, "series": [{"data": [[0.0, 305.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 412.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93202416918429, "minX": 1.6042188E12, "maxY": 9.972602739726032, "series": [{"data": [[1.6042188E12, 9.972602739726032], [1.60421886E12, 9.93202416918429]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421886E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 116.0, "minX": 1.0, "maxY": 1691.0, "series": [{"data": [[8.0, 246.0], [4.0, 246.0], [2.0, 887.0], [1.0, 1691.0], [9.0, 351.0], [10.0, 653.4157458563539], [5.0, 1632.0], [6.0, 116.0], [3.0, 875.0], [7.0, 199.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.936054421768707, 653.0857142857151]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 566.9166666666666, "minX": 1.6042188E12, "maxY": 1473752.6833333333, "series": [{"data": [[1.6042188E12, 262978.4], [1.60421886E12, 1473752.6833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6042188E12, 566.9166666666666], [1.60421886E12, 5103.116666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421886E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 648.9108761329304, "minX": 1.6042188E12, "maxY": 690.9452054794525, "series": [{"data": [[1.6042188E12, 690.9452054794525], [1.60421886E12, 648.9108761329304]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421886E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 647.8232628398791, "minX": 1.6042188E12, "maxY": 689.5068493150684, "series": [{"data": [[1.6042188E12, 689.5068493150684], [1.60421886E12, 647.8232628398791]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421886E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.003021148036253777, "minX": 1.6042188E12, "maxY": 1.493150684931507, "series": [{"data": [[1.6042188E12, 1.493150684931507], [1.60421886E12, 0.003021148036253777]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421886E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.6042188E12, "maxY": 2778.0, "series": [{"data": [[1.6042188E12, 2778.0], [1.60421886E12, 2045.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6042188E12, 6.0], [1.60421886E12, 17.966999841928484]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6042188E12, 6.0], [1.60421886E12, 19.127400126457214]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6042188E12, 6.0], [1.60421886E12, 18.59699984192848]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6042188E12, 6.0], [1.60421886E12, 7.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6042188E12, 462.0], [1.60421886E12, 666.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421886E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 201.0, "minX": 1.0, "maxY": 1691.0, "series": [{"data": [[32.0, 281.0], [33.0, 201.0], [9.0, 941.0], [10.0, 909.0], [11.0, 901.0], [3.0, 262.0], [12.0, 855.0], [13.0, 859.0], [14.0, 841.5], [15.0, 839.5], [1.0, 1691.0], [17.0, 723.5], [18.0, 409.5], [19.0, 599.0], [5.0, 403.0], [21.0, 461.0], [22.0, 309.5], [24.0, 218.5], [25.0, 268.0], [29.0, 280.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 201.0, "minX": 1.0, "maxY": 1688.0, "series": [{"data": [[32.0, 280.5], [33.0, 201.0], [9.0, 940.0], [10.0, 908.0], [11.0, 900.0], [3.0, 262.0], [12.0, 854.0], [13.0, 858.0], [14.0, 840.5], [15.0, 838.5], [1.0, 1688.0], [17.0, 723.0], [18.0, 409.0], [19.0, 599.0], [5.0, 402.0], [21.0, 460.0], [22.0, 309.0], [24.0, 218.0], [25.0, 267.0], [29.0, 280.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3833333333333333, "minX": 1.6042188E12, "maxY": 10.866666666666667, "series": [{"data": [[1.6042188E12, 1.3833333333333333], [1.60421886E12, 10.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421886E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.6042188E12, "maxY": 11.033333333333333, "series": [{"data": [[1.6042188E12, 1.2166666666666666], [1.60421886E12, 11.033333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60421886E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.6042188E12, "maxY": 11.033333333333333, "series": [{"data": [[1.6042188E12, 1.2166666666666666], [1.60421886E12, 11.033333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421886E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2166666666666666, "minX": 1.6042188E12, "maxY": 11.033333333333333, "series": [{"data": [[1.6042188E12, 1.2166666666666666], [1.60421886E12, 11.033333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60421886E12, "title": "Total Transactions Per Second"}},
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

