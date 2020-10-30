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
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 2442.0, "series": [{"data": [[0.0, 6.0], [0.1, 6.0], [0.2, 8.0], [0.3, 9.0], [0.4, 9.0], [0.5, 9.0], [0.6, 10.0], [0.7, 11.0], [0.8, 11.0], [0.9, 12.0], [1.0, 15.0], [1.1, 16.0], [1.2, 16.0], [1.3, 18.0], [1.4, 18.0], [1.5, 18.0], [1.6, 18.0], [1.7, 20.0], [1.8, 21.0], [1.9, 21.0], [2.0, 22.0], [2.1, 25.0], [2.2, 31.0], [2.3, 31.0], [2.4, 41.0], [2.5, 43.0], [2.6, 43.0], [2.7, 43.0], [2.8, 45.0], [2.9, 45.0], [3.0, 49.0], [3.1, 49.0], [3.2, 54.0], [3.3, 71.0], [3.4, 71.0], [3.5, 73.0], [3.6, 74.0], [3.7, 88.0], [3.8, 88.0], [3.9, 90.0], [4.0, 97.0], [4.1, 97.0], [4.2, 97.0], [4.3, 98.0], [4.4, 99.0], [4.5, 100.0], [4.6, 100.0], [4.7, 100.0], [4.8, 103.0], [4.9, 103.0], [5.0, 103.0], [5.1, 104.0], [5.2, 104.0], [5.3, 104.0], [5.4, 105.0], [5.5, 107.0], [5.6, 109.0], [5.7, 109.0], [5.8, 110.0], [5.9, 111.0], [6.0, 112.0], [6.1, 112.0], [6.2, 113.0], [6.3, 114.0], [6.4, 114.0], [6.5, 114.0], [6.6, 115.0], [6.7, 115.0], [6.8, 115.0], [6.9, 115.0], [7.0, 117.0], [7.1, 120.0], [7.2, 120.0], [7.3, 120.0], [7.4, 123.0], [7.5, 126.0], [7.6, 126.0], [7.7, 130.0], [7.8, 134.0], [7.9, 141.0], [8.0, 141.0], [8.1, 142.0], [8.2, 144.0], [8.3, 145.0], [8.4, 145.0], [8.5, 150.0], [8.6, 162.0], [8.7, 162.0], [8.8, 164.0], [8.9, 165.0], [9.0, 174.0], [9.1, 174.0], [9.2, 176.0], [9.3, 184.0], [9.4, 188.0], [9.5, 188.0], [9.6, 189.0], [9.7, 189.0], [9.8, 190.0], [9.9, 190.0], [10.0, 190.0], [10.1, 191.0], [10.2, 191.0], [10.3, 195.0], [10.4, 196.0], [10.5, 196.0], [10.6, 196.0], [10.7, 196.0], [10.8, 198.0], [10.9, 198.0], [11.0, 198.0], [11.1, 199.0], [11.2, 200.0], [11.3, 203.0], [11.4, 203.0], [11.5, 206.0], [11.6, 208.0], [11.7, 208.0], [11.8, 209.0], [11.9, 209.0], [12.0, 211.0], [12.1, 211.0], [12.2, 213.0], [12.3, 213.0], [12.4, 214.0], [12.5, 214.0], [12.6, 215.0], [12.7, 215.0], [12.8, 217.0], [12.9, 217.0], [13.0, 217.0], [13.1, 217.0], [13.2, 218.0], [13.3, 218.0], [13.4, 219.0], [13.5, 221.0], [13.6, 221.0], [13.7, 222.0], [13.8, 223.0], [13.9, 226.0], [14.0, 226.0], [14.1, 228.0], [14.2, 228.0], [14.3, 231.0], [14.4, 231.0], [14.5, 231.0], [14.6, 233.0], [14.7, 233.0], [14.8, 233.0], [14.9, 233.0], [15.0, 234.0], [15.1, 234.0], [15.2, 234.0], [15.3, 234.0], [15.4, 234.0], [15.5, 234.0], [15.6, 235.0], [15.7, 238.0], [15.8, 241.0], [15.9, 241.0], [16.0, 241.0], [16.1, 242.0], [16.2, 243.0], [16.3, 243.0], [16.4, 245.0], [16.5, 245.0], [16.6, 245.0], [16.7, 245.0], [16.8, 245.0], [16.9, 250.0], [17.0, 250.0], [17.1, 250.0], [17.2, 254.0], [17.3, 254.0], [17.4, 254.0], [17.5, 256.0], [17.6, 258.0], [17.7, 258.0], [17.8, 258.0], [17.9, 259.0], [18.0, 259.0], [18.1, 260.0], [18.2, 260.0], [18.3, 260.0], [18.4, 261.0], [18.5, 261.0], [18.6, 262.0], [18.7, 264.0], [18.8, 264.0], [18.9, 264.0], [19.0, 267.0], [19.1, 267.0], [19.2, 267.0], [19.3, 267.0], [19.4, 268.0], [19.5, 269.0], [19.6, 272.0], [19.7, 272.0], [19.8, 273.0], [19.9, 273.0], [20.0, 275.0], [20.1, 275.0], [20.2, 277.0], [20.3, 278.0], [20.4, 278.0], [20.5, 281.0], [20.6, 283.0], [20.7, 283.0], [20.8, 283.0], [20.9, 283.0], [21.0, 286.0], [21.1, 287.0], [21.2, 287.0], [21.3, 292.0], [21.4, 292.0], [21.5, 293.0], [21.6, 293.0], [21.7, 293.0], [21.8, 301.0], [21.9, 301.0], [22.0, 303.0], [22.1, 306.0], [22.2, 315.0], [22.3, 315.0], [22.4, 319.0], [22.5, 332.0], [22.6, 338.0], [22.7, 338.0], [22.8, 338.0], [22.9, 340.0], [23.0, 343.0], [23.1, 343.0], [23.2, 343.0], [23.3, 351.0], [23.4, 351.0], [23.5, 353.0], [23.6, 357.0], [23.7, 362.0], [23.8, 362.0], [23.9, 367.0], [24.0, 368.0], [24.1, 369.0], [24.2, 369.0], [24.3, 377.0], [24.4, 378.0], [24.5, 383.0], [24.6, 383.0], [24.7, 386.0], [24.8, 386.0], [24.9, 387.0], [25.0, 387.0], [25.1, 388.0], [25.2, 390.0], [25.3, 390.0], [25.4, 393.0], [25.5, 394.0], [25.6, 394.0], [25.7, 394.0], [25.8, 395.0], [25.9, 396.0], [26.0, 399.0], [26.1, 399.0], [26.2, 399.0], [26.3, 399.0], [26.4, 400.0], [26.5, 400.0], [26.6, 401.0], [26.7, 401.0], [26.8, 401.0], [26.9, 401.0], [27.0, 402.0], [27.1, 404.0], [27.2, 404.0], [27.3, 405.0], [27.4, 405.0], [27.5, 405.0], [27.6, 405.0], [27.7, 406.0], [27.8, 406.0], [27.9, 406.0], [28.0, 406.0], [28.1, 406.0], [28.2, 407.0], [28.3, 407.0], [28.4, 407.0], [28.5, 407.0], [28.6, 408.0], [28.7, 408.0], [28.8, 408.0], [28.9, 410.0], [29.0, 410.0], [29.1, 410.0], [29.2, 410.0], [29.3, 411.0], [29.4, 411.0], [29.5, 411.0], [29.6, 411.0], [29.7, 412.0], [29.8, 414.0], [29.9, 414.0], [30.0, 415.0], [30.1, 416.0], [30.2, 416.0], [30.3, 418.0], [30.4, 419.0], [30.5, 419.0], [30.6, 419.0], [30.7, 419.0], [30.8, 421.0], [30.9, 421.0], [31.0, 421.0], [31.1, 421.0], [31.2, 422.0], [31.3, 422.0], [31.4, 422.0], [31.5, 422.0], [31.6, 423.0], [31.7, 423.0], [31.8, 423.0], [31.9, 424.0], [32.0, 424.0], [32.1, 424.0], [32.2, 424.0], [32.3, 425.0], [32.4, 427.0], [32.5, 427.0], [32.6, 427.0], [32.7, 428.0], [32.8, 429.0], [32.9, 429.0], [33.0, 429.0], [33.1, 430.0], [33.2, 431.0], [33.3, 431.0], [33.4, 432.0], [33.5, 432.0], [33.6, 432.0], [33.7, 432.0], [33.8, 433.0], [33.9, 434.0], [34.0, 434.0], [34.1, 436.0], [34.2, 436.0], [34.3, 437.0], [34.4, 437.0], [34.5, 438.0], [34.6, 438.0], [34.7, 439.0], [34.8, 439.0], [34.9, 440.0], [35.0, 440.0], [35.1, 440.0], [35.2, 440.0], [35.3, 443.0], [35.4, 444.0], [35.5, 444.0], [35.6, 446.0], [35.7, 446.0], [35.8, 446.0], [35.9, 446.0], [36.0, 446.0], [36.1, 446.0], [36.2, 446.0], [36.3, 446.0], [36.4, 447.0], [36.5, 447.0], [36.6, 449.0], [36.7, 449.0], [36.8, 449.0], [36.9, 449.0], [37.0, 449.0], [37.1, 450.0], [37.2, 453.0], [37.3, 455.0], [37.4, 455.0], [37.5, 455.0], [37.6, 455.0], [37.7, 456.0], [37.8, 456.0], [37.9, 456.0], [38.0, 460.0], [38.1, 460.0], [38.2, 460.0], [38.3, 461.0], [38.4, 461.0], [38.5, 461.0], [38.6, 461.0], [38.7, 463.0], [38.8, 464.0], [38.9, 464.0], [39.0, 465.0], [39.1, 468.0], [39.2, 469.0], [39.3, 469.0], [39.4, 471.0], [39.5, 473.0], [39.6, 473.0], [39.7, 473.0], [39.8, 475.0], [39.9, 476.0], [40.0, 477.0], [40.1, 477.0], [40.2, 478.0], [40.3, 479.0], [40.4, 479.0], [40.5, 480.0], [40.6, 480.0], [40.7, 482.0], [40.8, 482.0], [40.9, 482.0], [41.0, 483.0], [41.1, 484.0], [41.2, 484.0], [41.3, 484.0], [41.4, 485.0], [41.5, 485.0], [41.6, 485.0], [41.7, 486.0], [41.8, 491.0], [41.9, 491.0], [42.0, 491.0], [42.1, 492.0], [42.2, 494.0], [42.3, 494.0], [42.4, 494.0], [42.5, 496.0], [42.6, 501.0], [42.7, 501.0], [42.8, 502.0], [42.9, 502.0], [43.0, 505.0], [43.1, 505.0], [43.2, 506.0], [43.3, 506.0], [43.4, 506.0], [43.5, 509.0], [43.6, 510.0], [43.7, 512.0], [43.8, 512.0], [43.9, 515.0], [44.0, 517.0], [44.1, 518.0], [44.2, 518.0], [44.3, 519.0], [44.4, 524.0], [44.5, 526.0], [44.6, 526.0], [44.7, 530.0], [44.8, 531.0], [44.9, 534.0], [45.0, 534.0], [45.1, 537.0], [45.2, 537.0], [45.3, 537.0], [45.4, 537.0], [45.5, 539.0], [45.6, 542.0], [45.7, 542.0], [45.8, 548.0], [45.9, 550.0], [46.0, 551.0], [46.1, 551.0], [46.2, 552.0], [46.3, 553.0], [46.4, 559.0], [46.5, 559.0], [46.6, 559.0], [46.7, 559.0], [46.8, 559.0], [46.9, 571.0], [47.0, 571.0], [47.1, 578.0], [47.2, 578.0], [47.3, 578.0], [47.4, 583.0], [47.5, 597.0], [47.6, 597.0], [47.7, 600.0], [47.8, 606.0], [47.9, 610.0], [48.0, 610.0], [48.1, 611.0], [48.2, 612.0], [48.3, 612.0], [48.4, 612.0], [48.5, 613.0], [48.6, 614.0], [48.7, 614.0], [48.8, 614.0], [48.9, 614.0], [49.0, 615.0], [49.1, 615.0], [49.2, 622.0], [49.3, 622.0], [49.4, 623.0], [49.5, 623.0], [49.6, 623.0], [49.7, 624.0], [49.8, 626.0], [49.9, 626.0], [50.0, 627.0], [50.1, 627.0], [50.2, 627.0], [50.3, 631.0], [50.4, 634.0], [50.5, 634.0], [50.6, 634.0], [50.7, 637.0], [50.8, 638.0], [50.9, 638.0], [51.0, 638.0], [51.1, 639.0], [51.2, 641.0], [51.3, 641.0], [51.4, 641.0], [51.5, 641.0], [51.6, 641.0], [51.7, 641.0], [51.8, 642.0], [51.9, 645.0], [52.0, 645.0], [52.1, 645.0], [52.2, 650.0], [52.3, 651.0], [52.4, 651.0], [52.5, 651.0], [52.6, 653.0], [52.7, 653.0], [52.8, 653.0], [52.9, 653.0], [53.0, 654.0], [53.1, 654.0], [53.2, 656.0], [53.3, 656.0], [53.4, 657.0], [53.5, 658.0], [53.6, 658.0], [53.7, 659.0], [53.8, 659.0], [53.9, 672.0], [54.0, 672.0], [54.1, 678.0], [54.2, 682.0], [54.3, 688.0], [54.4, 688.0], [54.5, 689.0], [54.6, 706.0], [54.7, 709.0], [54.8, 709.0], [54.9, 713.0], [55.0, 716.0], [55.1, 716.0], [55.2, 729.0], [55.3, 737.0], [55.4, 739.0], [55.5, 739.0], [55.6, 745.0], [55.7, 749.0], [55.8, 750.0], [55.9, 750.0], [56.0, 751.0], [56.1, 752.0], [56.2, 754.0], [56.3, 754.0], [56.4, 754.0], [56.5, 757.0], [56.6, 760.0], [56.7, 760.0], [56.8, 762.0], [56.9, 768.0], [57.0, 768.0], [57.1, 784.0], [57.2, 785.0], [57.3, 788.0], [57.4, 788.0], [57.5, 789.0], [57.6, 790.0], [57.7, 790.0], [57.8, 790.0], [57.9, 794.0], [58.0, 806.0], [58.1, 806.0], [58.2, 806.0], [58.3, 807.0], [58.4, 807.0], [58.5, 807.0], [58.6, 814.0], [58.7, 816.0], [58.8, 816.0], [58.9, 816.0], [59.0, 819.0], [59.1, 820.0], [59.2, 820.0], [59.3, 820.0], [59.4, 821.0], [59.5, 824.0], [59.6, 825.0], [59.7, 825.0], [59.8, 827.0], [59.9, 827.0], [60.0, 829.0], [60.1, 829.0], [60.2, 829.0], [60.3, 829.0], [60.4, 829.0], [60.5, 829.0], [60.6, 832.0], [60.7, 832.0], [60.8, 832.0], [60.9, 832.0], [61.0, 835.0], [61.1, 836.0], [61.2, 836.0], [61.3, 837.0], [61.4, 838.0], [61.5, 838.0], [61.6, 838.0], [61.7, 839.0], [61.8, 839.0], [61.9, 839.0], [62.0, 840.0], [62.1, 841.0], [62.2, 842.0], [62.3, 842.0], [62.4, 843.0], [62.5, 849.0], [62.6, 850.0], [62.7, 850.0], [62.8, 850.0], [62.9, 850.0], [63.0, 850.0], [63.1, 850.0], [63.2, 850.0], [63.3, 851.0], [63.4, 851.0], [63.5, 851.0], [63.6, 852.0], [63.7, 852.0], [63.8, 852.0], [63.9, 853.0], [64.0, 853.0], [64.1, 854.0], [64.2, 854.0], [64.3, 856.0], [64.4, 856.0], [64.5, 857.0], [64.6, 857.0], [64.7, 857.0], [64.8, 857.0], [64.9, 859.0], [65.0, 859.0], [65.1, 859.0], [65.2, 860.0], [65.3, 860.0], [65.4, 861.0], [65.5, 861.0], [65.6, 863.0], [65.7, 863.0], [65.8, 863.0], [65.9, 864.0], [66.0, 866.0], [66.1, 866.0], [66.2, 866.0], [66.3, 868.0], [66.4, 868.0], [66.5, 868.0], [66.6, 868.0], [66.7, 869.0], [66.8, 869.0], [66.9, 869.0], [67.0, 870.0], [67.1, 870.0], [67.2, 870.0], [67.3, 871.0], [67.4, 872.0], [67.5, 872.0], [67.6, 872.0], [67.7, 874.0], [67.8, 874.0], [67.9, 874.0], [68.0, 874.0], [68.1, 875.0], [68.2, 876.0], [68.3, 877.0], [68.4, 877.0], [68.5, 877.0], [68.6, 877.0], [68.7, 877.0], [68.8, 877.0], [68.9, 878.0], [69.0, 879.0], [69.1, 879.0], [69.2, 879.0], [69.3, 880.0], [69.4, 881.0], [69.5, 881.0], [69.6, 882.0], [69.7, 882.0], [69.8, 882.0], [69.9, 882.0], [70.0, 885.0], [70.1, 886.0], [70.2, 886.0], [70.3, 886.0], [70.4, 887.0], [70.5, 887.0], [70.6, 887.0], [70.7, 887.0], [70.8, 887.0], [70.9, 887.0], [71.0, 887.0], [71.1, 888.0], [71.2, 888.0], [71.3, 890.0], [71.4, 890.0], [71.5, 891.0], [71.6, 892.0], [71.7, 892.0], [71.8, 892.0], [71.9, 892.0], [72.0, 892.0], [72.1, 892.0], [72.2, 893.0], [72.3, 893.0], [72.4, 893.0], [72.5, 893.0], [72.6, 893.0], [72.7, 894.0], [72.8, 895.0], [72.9, 895.0], [73.0, 895.0], [73.1, 895.0], [73.2, 896.0], [73.3, 896.0], [73.4, 896.0], [73.5, 898.0], [73.6, 898.0], [73.7, 899.0], [73.8, 899.0], [73.9, 903.0], [74.0, 903.0], [74.1, 903.0], [74.2, 903.0], [74.3, 904.0], [74.4, 904.0], [74.5, 906.0], [74.6, 907.0], [74.7, 909.0], [74.8, 909.0], [74.9, 910.0], [75.0, 912.0], [75.1, 912.0], [75.2, 912.0], [75.3, 913.0], [75.4, 914.0], [75.5, 914.0], [75.6, 914.0], [75.7, 915.0], [75.8, 916.0], [75.9, 916.0], [76.0, 917.0], [76.1, 918.0], [76.2, 919.0], [76.3, 919.0], [76.4, 919.0], [76.5, 919.0], [76.6, 919.0], [76.7, 919.0], [76.8, 920.0], [76.9, 920.0], [77.0, 920.0], [77.1, 922.0], [77.2, 922.0], [77.3, 925.0], [77.4, 925.0], [77.5, 926.0], [77.6, 927.0], [77.7, 928.0], [77.8, 928.0], [77.9, 929.0], [78.0, 932.0], [78.1, 933.0], [78.2, 933.0], [78.3, 933.0], [78.4, 933.0], [78.5, 933.0], [78.6, 934.0], [78.7, 934.0], [78.8, 934.0], [78.9, 934.0], [79.0, 934.0], [79.1, 935.0], [79.2, 935.0], [79.3, 935.0], [79.4, 935.0], [79.5, 936.0], [79.6, 936.0], [79.7, 936.0], [79.8, 937.0], [79.9, 938.0], [80.0, 940.0], [80.1, 940.0], [80.2, 940.0], [80.3, 941.0], [80.4, 941.0], [80.5, 941.0], [80.6, 943.0], [80.7, 943.0], [80.8, 943.0], [80.9, 943.0], [81.0, 944.0], [81.1, 945.0], [81.2, 945.0], [81.3, 946.0], [81.4, 946.0], [81.5, 946.0], [81.6, 946.0], [81.7, 947.0], [81.8, 948.0], [81.9, 948.0], [82.0, 950.0], [82.1, 951.0], [82.2, 952.0], [82.3, 952.0], [82.4, 954.0], [82.5, 954.0], [82.6, 955.0], [82.7, 955.0], [82.8, 956.0], [82.9, 958.0], [83.0, 959.0], [83.1, 959.0], [83.2, 961.0], [83.3, 963.0], [83.4, 963.0], [83.5, 964.0], [83.6, 970.0], [83.7, 972.0], [83.8, 972.0], [83.9, 974.0], [84.0, 975.0], [84.1, 977.0], [84.2, 977.0], [84.3, 979.0], [84.4, 980.0], [84.5, 981.0], [84.6, 981.0], [84.7, 983.0], [84.8, 984.0], [84.9, 984.0], [85.0, 984.0], [85.1, 984.0], [85.2, 985.0], [85.3, 985.0], [85.4, 986.0], [85.5, 987.0], [85.6, 992.0], [85.7, 992.0], [85.8, 992.0], [85.9, 992.0], [86.0, 992.0], [86.1, 992.0], [86.2, 995.0], [86.3, 995.0], [86.4, 996.0], [86.5, 996.0], [86.6, 1000.0], [86.7, 1001.0], [86.8, 1001.0], [86.9, 1003.0], [87.0, 1005.0], [87.1, 1007.0], [87.2, 1007.0], [87.3, 1011.0], [87.4, 1015.0], [87.5, 1015.0], [87.6, 1015.0], [87.7, 1019.0], [87.8, 1029.0], [87.9, 1029.0], [88.0, 1029.0], [88.1, 1031.0], [88.2, 1032.0], [88.3, 1036.0], [88.4, 1036.0], [88.5, 1040.0], [88.6, 1041.0], [88.7, 1041.0], [88.8, 1041.0], [88.9, 1044.0], [89.0, 1045.0], [89.1, 1045.0], [89.2, 1046.0], [89.3, 1050.0], [89.4, 1050.0], [89.5, 1050.0], [89.6, 1052.0], [89.7, 1052.0], [89.8, 1052.0], [89.9, 1052.0], [90.0, 1056.0], [90.1, 1057.0], [90.2, 1057.0], [90.3, 1057.0], [90.4, 1058.0], [90.5, 1060.0], [90.6, 1060.0], [90.7, 1060.0], [90.8, 1062.0], [90.9, 1063.0], [91.0, 1063.0], [91.1, 1065.0], [91.2, 1066.0], [91.3, 1075.0], [91.4, 1075.0], [91.5, 1077.0], [91.6, 1079.0], [91.7, 1079.0], [91.8, 1079.0], [91.9, 1080.0], [92.0, 1081.0], [92.1, 1081.0], [92.2, 1081.0], [92.3, 1082.0], [92.4, 1083.0], [92.5, 1083.0], [92.6, 1085.0], [92.7, 1089.0], [92.8, 1095.0], [92.9, 1095.0], [93.0, 1095.0], [93.1, 1096.0], [93.2, 1097.0], [93.3, 1097.0], [93.4, 1102.0], [93.5, 1109.0], [93.6, 1109.0], [93.7, 1111.0], [93.8, 1117.0], [93.9, 1119.0], [94.0, 1119.0], [94.1, 1121.0], [94.2, 1126.0], [94.3, 1132.0], [94.4, 1132.0], [94.5, 1134.0], [94.6, 1135.0], [94.7, 1140.0], [94.8, 1140.0], [94.9, 1148.0], [95.0, 1149.0], [95.1, 1149.0], [95.2, 1163.0], [95.3, 1176.0], [95.4, 1178.0], [95.5, 1178.0], [95.6, 1180.0], [95.7, 1183.0], [95.8, 1201.0], [95.9, 1201.0], [96.0, 1220.0], [96.1, 1235.0], [96.2, 1237.0], [96.3, 1237.0], [96.4, 1251.0], [96.5, 1260.0], [96.6, 1265.0], [96.7, 1265.0], [96.8, 1271.0], [96.9, 1271.0], [97.0, 1271.0], [97.1, 1285.0], [97.2, 1293.0], [97.3, 1293.0], [97.4, 1293.0], [97.5, 1294.0], [97.6, 1302.0], [97.7, 1309.0], [97.8, 1309.0], [97.9, 1479.0], [98.0, 1568.0], [98.1, 1604.0], [98.2, 1604.0], [98.3, 1641.0], [98.4, 1813.0], [98.5, 1813.0], [98.6, 1825.0], [98.7, 1876.0], [98.8, 1965.0], [98.9, 1965.0], [99.0, 1992.0], [99.1, 2176.0], [99.2, 2246.0], [99.3, 2246.0], [99.4, 2300.0], [99.5, 2347.0], [99.6, 2431.0], [99.7, 2431.0], [99.8, 2436.0], [99.9, 2442.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 119.0, "series": [{"data": [[0.0, 33.0], [2100.0, 1.0], [2200.0, 1.0], [2300.0, 2.0], [2400.0, 3.0], [600.0, 51.0], [700.0, 25.0], [200.0, 78.0], [800.0, 117.0], [900.0, 93.0], [1000.0, 50.0], [1100.0, 18.0], [300.0, 34.0], [1200.0, 13.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 1.0], [400.0, 119.0], [100.0, 49.0], [1600.0, 2.0], [1800.0, 3.0], [1900.0, 2.0], [500.0, 37.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 407.0, "series": [{"data": [[0.0, 313.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 407.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.925373134328359, "minX": 1.60404828E12, "maxY": 10.0, "series": [{"data": [[1.60404828E12, 10.0], [1.60404834E12, 9.925373134328359]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404834E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 114.0, "minX": 1.0, "maxY": 1992.0, "series": [{"data": [[8.0, 114.0], [4.0, 1992.0], [2.0, 1109.0], [1.0, 829.0], [9.0, 877.0], [10.0, 646.8057851239671], [5.0, 196.0], [6.0, 872.0], [3.0, 825.0], [7.0, 250.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 648.4965986394559]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1026.0833333333333, "minX": 1.60404828E12, "maxY": 1311037.1833333333, "series": [{"data": [[1.60404828E12, 425693.9], [1.60404834E12, 1311037.1833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60404828E12, 1026.0833333333333], [1.60404834E12, 4643.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404834E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 627.3996683250409, "minX": 1.60404828E12, "maxY": 744.871212121212, "series": [{"data": [[1.60404828E12, 744.871212121212], [1.60404834E12, 627.3996683250409]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404834E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 626.3598673300161, "minX": 1.60404828E12, "maxY": 743.5909090909088, "series": [{"data": [[1.60404828E12, 743.5909090909088], [1.60404834E12, 626.3598673300161]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404834E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.006633499170812604, "minX": 1.60404828E12, "maxY": 1.075757575757576, "series": [{"data": [[1.60404828E12, 1.075757575757576], [1.60404834E12, 0.006633499170812604]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404834E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6.0, "minX": 1.60404828E12, "maxY": 2442.0, "series": [{"data": [[1.60404828E12, 2442.0], [1.60404834E12, 1992.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60404828E12, 9.0], [1.60404834E12, 13.743999423980714]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60404828E12, 9.0], [1.60404834E12, 15.918400230407716]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60404828E12, 9.0], [1.60404834E12, 14.951999711990354]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60404828E12, 9.0], [1.60404834E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60404828E12, 641.5], [1.60404834E12, 623.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404834E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 247.5, "minX": 5.0, "maxY": 2246.0, "series": [{"data": [[11.0, 893.0], [12.0, 884.5], [13.0, 885.5], [14.0, 850.0], [15.0, 849.0], [16.0, 247.5], [17.0, 436.0], [18.0, 409.0], [5.0, 2246.0], [20.0, 605.0], [21.0, 263.0], [22.0, 628.0], [23.0, 343.0], [6.0, 416.5], [24.0, 270.5], [26.0, 256.0], [30.0, 275.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 247.5, "minX": 5.0, "maxY": 2245.0, "series": [{"data": [[11.0, 892.0], [12.0, 883.0], [13.0, 884.5], [14.0, 848.5], [15.0, 849.0], [16.0, 247.5], [17.0, 434.0], [18.0, 408.5], [5.0, 2245.0], [20.0, 604.5], [21.0, 262.0], [22.0, 628.0], [23.0, 341.0], [6.0, 416.0], [24.0, 270.0], [26.0, 256.0], [30.0, 275.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.3666666666666667, "minX": 1.60404828E12, "maxY": 9.883333333333333, "series": [{"data": [[1.60404828E12, 2.3666666666666667], [1.60404834E12, 9.883333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404834E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60404828E12, "maxY": 10.05, "series": [{"data": [[1.60404828E12, 2.2], [1.60404834E12, 10.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60404834E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60404828E12, "maxY": 10.05, "series": [{"data": [[1.60404828E12, 2.2], [1.60404834E12, 10.05]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404834E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.2, "minX": 1.60404828E12, "maxY": 10.05, "series": [{"data": [[1.60404828E12, 2.2], [1.60404834E12, 10.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60404834E12, "title": "Total Transactions Per Second"}},
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

