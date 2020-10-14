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
        data: {"result": {"minY": 168.0, "minX": 0.0, "maxY": 3396.0, "series": [{"data": [[0.0, 168.0], [0.1, 168.0], [0.2, 169.0], [0.3, 176.0], [0.4, 176.0], [0.5, 180.0], [0.6, 182.0], [0.7, 186.0], [0.8, 186.0], [0.9, 186.0], [1.0, 186.0], [1.1, 186.0], [1.2, 186.0], [1.3, 186.0], [1.4, 187.0], [1.5, 188.0], [1.6, 188.0], [1.7, 188.0], [1.8, 189.0], [1.9, 189.0], [2.0, 189.0], [2.1, 193.0], [2.2, 194.0], [2.3, 194.0], [2.4, 194.0], [2.5, 195.0], [2.6, 195.0], [2.7, 195.0], [2.8, 196.0], [2.9, 196.0], [3.0, 197.0], [3.1, 197.0], [3.2, 198.0], [3.3, 198.0], [3.4, 198.0], [3.5, 198.0], [3.6, 198.0], [3.7, 199.0], [3.8, 199.0], [3.9, 199.0], [4.0, 199.0], [4.1, 199.0], [4.2, 199.0], [4.3, 200.0], [4.4, 201.0], [4.5, 202.0], [4.6, 202.0], [4.7, 202.0], [4.8, 203.0], [4.9, 203.0], [5.0, 203.0], [5.1, 203.0], [5.2, 204.0], [5.3, 204.0], [5.4, 204.0], [5.5, 206.0], [5.6, 207.0], [5.7, 207.0], [5.8, 207.0], [5.9, 207.0], [6.0, 207.0], [6.1, 207.0], [6.2, 210.0], [6.3, 210.0], [6.4, 210.0], [6.5, 210.0], [6.6, 211.0], [6.7, 214.0], [6.8, 214.0], [6.9, 218.0], [7.0, 221.0], [7.1, 228.0], [7.2, 228.0], [7.3, 230.0], [7.4, 234.0], [7.5, 236.0], [7.6, 236.0], [7.7, 250.0], [7.8, 269.0], [7.9, 271.0], [8.0, 271.0], [8.1, 273.0], [8.2, 278.0], [8.3, 284.0], [8.4, 284.0], [8.5, 284.0], [8.6, 286.0], [8.7, 286.0], [8.8, 287.0], [8.9, 290.0], [9.0, 292.0], [9.1, 292.0], [9.2, 293.0], [9.3, 293.0], [9.4, 294.0], [9.5, 294.0], [9.6, 295.0], [9.7, 296.0], [9.8, 297.0], [9.9, 297.0], [10.0, 297.0], [10.1, 299.0], [10.2, 299.0], [10.3, 300.0], [10.4, 300.0], [10.5, 301.0], [10.6, 301.0], [10.7, 301.0], [10.8, 302.0], [10.9, 303.0], [11.0, 303.0], [11.1, 304.0], [11.2, 304.0], [11.3, 304.0], [11.4, 304.0], [11.5, 304.0], [11.6, 304.0], [11.7, 304.0], [11.8, 305.0], [11.9, 306.0], [12.0, 307.0], [12.1, 307.0], [12.2, 307.0], [12.3, 308.0], [12.4, 308.0], [12.5, 308.0], [12.6, 308.0], [12.7, 309.0], [12.8, 310.0], [12.9, 310.0], [13.0, 310.0], [13.1, 310.0], [13.2, 311.0], [13.3, 311.0], [13.4, 311.0], [13.5, 311.0], [13.6, 311.0], [13.7, 312.0], [13.8, 312.0], [13.9, 312.0], [14.0, 312.0], [14.1, 313.0], [14.2, 313.0], [14.3, 313.0], [14.4, 313.0], [14.5, 313.0], [14.6, 314.0], [14.7, 315.0], [14.8, 315.0], [14.9, 316.0], [15.0, 316.0], [15.1, 316.0], [15.2, 316.0], [15.3, 317.0], [15.4, 318.0], [15.5, 318.0], [15.6, 318.0], [15.7, 319.0], [15.8, 320.0], [15.9, 320.0], [16.0, 321.0], [16.1, 322.0], [16.2, 322.0], [16.3, 322.0], [16.4, 323.0], [16.5, 323.0], [16.6, 324.0], [16.7, 324.0], [16.8, 324.0], [16.9, 328.0], [17.0, 328.0], [17.1, 329.0], [17.2, 331.0], [17.3, 331.0], [17.4, 331.0], [17.5, 334.0], [17.6, 335.0], [17.7, 335.0], [17.8, 335.0], [17.9, 336.0], [18.0, 339.0], [18.1, 340.0], [18.2, 340.0], [18.3, 342.0], [18.4, 345.0], [18.5, 345.0], [18.6, 347.0], [18.7, 348.0], [18.8, 348.0], [18.9, 348.0], [19.0, 349.0], [19.1, 350.0], [19.2, 350.0], [19.3, 350.0], [19.4, 350.0], [19.5, 352.0], [19.6, 352.0], [19.7, 352.0], [19.8, 355.0], [19.9, 355.0], [20.0, 362.0], [20.1, 362.0], [20.2, 365.0], [20.3, 365.0], [20.4, 365.0], [20.5, 371.0], [20.6, 372.0], [20.7, 391.0], [20.8, 391.0], [20.9, 393.0], [21.0, 394.0], [21.1, 397.0], [21.2, 397.0], [21.3, 400.0], [21.4, 401.0], [21.5, 412.0], [21.6, 412.0], [21.7, 415.0], [21.8, 416.0], [21.9, 416.0], [22.0, 416.0], [22.1, 417.0], [22.2, 417.0], [22.3, 417.0], [22.4, 417.0], [22.5, 418.0], [22.6, 418.0], [22.7, 418.0], [22.8, 420.0], [22.9, 420.0], [23.0, 420.0], [23.1, 420.0], [23.2, 421.0], [23.3, 421.0], [23.4, 421.0], [23.5, 422.0], [23.6, 424.0], [23.7, 425.0], [23.8, 425.0], [23.9, 425.0], [24.0, 425.0], [24.1, 426.0], [24.2, 426.0], [24.3, 426.0], [24.4, 426.0], [24.5, 428.0], [24.6, 428.0], [24.7, 428.0], [24.8, 428.0], [24.9, 429.0], [25.0, 429.0], [25.1, 429.0], [25.2, 430.0], [25.3, 430.0], [25.4, 431.0], [25.5, 432.0], [25.6, 433.0], [25.7, 433.0], [25.8, 433.0], [25.9, 434.0], [26.0, 434.0], [26.1, 434.0], [26.2, 434.0], [26.3, 436.0], [26.4, 436.0], [26.5, 436.0], [26.6, 436.0], [26.7, 437.0], [26.8, 437.0], [26.9, 440.0], [27.0, 440.0], [27.1, 440.0], [27.2, 440.0], [27.3, 440.0], [27.4, 441.0], [27.5, 441.0], [27.6, 441.0], [27.7, 442.0], [27.8, 442.0], [27.9, 442.0], [28.0, 442.0], [28.1, 444.0], [28.2, 446.0], [28.3, 448.0], [28.4, 448.0], [28.5, 450.0], [28.6, 453.0], [28.7, 453.0], [28.8, 453.0], [28.9, 459.0], [29.0, 464.0], [29.1, 464.0], [29.2, 465.0], [29.3, 468.0], [29.4, 472.0], [29.5, 472.0], [29.6, 483.0], [29.7, 484.0], [29.8, 484.0], [29.9, 484.0], [30.0, 485.0], [30.1, 490.0], [30.2, 490.0], [30.3, 495.0], [30.4, 497.0], [30.5, 511.0], [30.6, 511.0], [30.7, 515.0], [30.8, 516.0], [30.9, 516.0], [31.0, 516.0], [31.1, 521.0], [31.2, 523.0], [31.3, 523.0], [31.4, 523.0], [31.5, 523.0], [31.6, 526.0], [31.7, 526.0], [31.8, 527.0], [31.9, 528.0], [32.0, 531.0], [32.1, 531.0], [32.2, 532.0], [32.3, 532.0], [32.4, 534.0], [32.5, 534.0], [32.6, 535.0], [32.7, 536.0], [32.8, 537.0], [32.9, 537.0], [33.0, 540.0], [33.1, 540.0], [33.2, 542.0], [33.3, 542.0], [33.4, 543.0], [33.5, 546.0], [33.6, 546.0], [33.7, 550.0], [33.8, 550.0], [33.9, 551.0], [34.0, 551.0], [34.1, 551.0], [34.2, 552.0], [34.3, 553.0], [34.4, 553.0], [34.5, 557.0], [34.6, 564.0], [34.7, 569.0], [34.8, 569.0], [34.9, 572.0], [35.0, 573.0], [35.1, 573.0], [35.2, 575.0], [35.3, 580.0], [35.4, 583.0], [35.5, 583.0], [35.6, 586.0], [35.7, 591.0], [35.8, 605.0], [35.9, 605.0], [36.0, 629.0], [36.1, 629.0], [36.2, 633.0], [36.3, 633.0], [36.4, 637.0], [36.5, 642.0], [36.6, 643.0], [36.7, 643.0], [36.8, 644.0], [36.9, 645.0], [37.0, 645.0], [37.1, 646.0], [37.2, 649.0], [37.3, 649.0], [37.4, 649.0], [37.5, 649.0], [37.6, 650.0], [37.7, 651.0], [37.8, 651.0], [37.9, 651.0], [38.0, 651.0], [38.1, 653.0], [38.2, 653.0], [38.3, 654.0], [38.4, 654.0], [38.5, 654.0], [38.6, 654.0], [38.7, 655.0], [38.8, 655.0], [38.9, 655.0], [39.0, 655.0], [39.1, 656.0], [39.2, 656.0], [39.3, 656.0], [39.4, 656.0], [39.5, 657.0], [39.6, 657.0], [39.7, 657.0], [39.8, 658.0], [39.9, 659.0], [40.0, 659.0], [40.1, 659.0], [40.2, 660.0], [40.3, 661.0], [40.4, 661.0], [40.5, 661.0], [40.6, 662.0], [40.7, 663.0], [40.8, 663.0], [40.9, 663.0], [41.0, 663.0], [41.1, 663.0], [41.2, 663.0], [41.3, 664.0], [41.4, 664.0], [41.5, 665.0], [41.6, 665.0], [41.7, 665.0], [41.8, 665.0], [41.9, 665.0], [42.0, 666.0], [42.1, 666.0], [42.2, 666.0], [42.3, 666.0], [42.4, 666.0], [42.5, 667.0], [42.6, 667.0], [42.7, 667.0], [42.8, 668.0], [42.9, 668.0], [43.0, 669.0], [43.1, 669.0], [43.2, 669.0], [43.3, 669.0], [43.4, 669.0], [43.5, 669.0], [43.6, 669.0], [43.7, 670.0], [43.8, 670.0], [43.9, 670.0], [44.0, 671.0], [44.1, 671.0], [44.2, 671.0], [44.3, 672.0], [44.4, 672.0], [44.5, 672.0], [44.6, 672.0], [44.7, 672.0], [44.8, 673.0], [44.9, 674.0], [45.0, 674.0], [45.1, 674.0], [45.2, 674.0], [45.3, 674.0], [45.4, 674.0], [45.5, 675.0], [45.6, 675.0], [45.7, 675.0], [45.8, 677.0], [45.9, 677.0], [46.0, 678.0], [46.1, 678.0], [46.2, 678.0], [46.3, 680.0], [46.4, 680.0], [46.5, 680.0], [46.6, 680.0], [46.7, 681.0], [46.8, 681.0], [46.9, 681.0], [47.0, 681.0], [47.1, 681.0], [47.2, 681.0], [47.3, 682.0], [47.4, 682.0], [47.5, 682.0], [47.6, 682.0], [47.7, 682.0], [47.8, 682.0], [47.9, 682.0], [48.0, 682.0], [48.1, 683.0], [48.2, 683.0], [48.3, 683.0], [48.4, 683.0], [48.5, 684.0], [48.6, 684.0], [48.7, 684.0], [48.8, 684.0], [48.9, 684.0], [49.0, 684.0], [49.1, 684.0], [49.2, 685.0], [49.3, 686.0], [49.4, 686.0], [49.5, 686.0], [49.6, 686.0], [49.7, 687.0], [49.8, 687.0], [49.9, 687.0], [50.0, 688.0], [50.1, 688.0], [50.2, 688.0], [50.3, 689.0], [50.4, 689.0], [50.5, 689.0], [50.6, 689.0], [50.7, 689.0], [50.8, 689.0], [50.9, 689.0], [51.0, 689.0], [51.1, 689.0], [51.2, 690.0], [51.3, 691.0], [51.4, 691.0], [51.5, 691.0], [51.6, 691.0], [51.7, 691.0], [51.8, 691.0], [51.9, 692.0], [52.0, 692.0], [52.1, 692.0], [52.2, 694.0], [52.3, 694.0], [52.4, 695.0], [52.5, 695.0], [52.6, 695.0], [52.7, 696.0], [52.8, 697.0], [52.9, 697.0], [53.0, 697.0], [53.1, 697.0], [53.2, 698.0], [53.3, 698.0], [53.4, 700.0], [53.5, 700.0], [53.6, 700.0], [53.7, 701.0], [53.8, 702.0], [53.9, 702.0], [54.0, 702.0], [54.1, 703.0], [54.2, 703.0], [54.3, 704.0], [54.4, 704.0], [54.5, 705.0], [54.6, 705.0], [54.7, 705.0], [54.8, 705.0], [54.9, 705.0], [55.0, 706.0], [55.1, 706.0], [55.2, 707.0], [55.3, 707.0], [55.4, 708.0], [55.5, 708.0], [55.6, 708.0], [55.7, 708.0], [55.8, 710.0], [55.9, 710.0], [56.0, 710.0], [56.1, 711.0], [56.2, 713.0], [56.3, 713.0], [56.4, 713.0], [56.5, 714.0], [56.6, 714.0], [56.7, 714.0], [56.8, 715.0], [56.9, 715.0], [57.0, 715.0], [57.1, 716.0], [57.2, 716.0], [57.3, 718.0], [57.4, 718.0], [57.5, 720.0], [57.6, 720.0], [57.7, 720.0], [57.8, 720.0], [57.9, 720.0], [58.0, 722.0], [58.1, 723.0], [58.2, 723.0], [58.3, 725.0], [58.4, 726.0], [58.5, 726.0], [58.6, 727.0], [58.7, 728.0], [58.8, 728.0], [58.9, 728.0], [59.0, 728.0], [59.1, 729.0], [59.2, 729.0], [59.3, 729.0], [59.4, 729.0], [59.5, 732.0], [59.6, 733.0], [59.7, 733.0], [59.8, 734.0], [59.9, 736.0], [60.0, 737.0], [60.1, 737.0], [60.2, 737.0], [60.3, 739.0], [60.4, 739.0], [60.5, 740.0], [60.6, 742.0], [60.7, 744.0], [60.8, 744.0], [60.9, 747.0], [61.0, 747.0], [61.1, 750.0], [61.2, 750.0], [61.3, 750.0], [61.4, 751.0], [61.5, 751.0], [61.6, 751.0], [61.7, 752.0], [61.8, 754.0], [61.9, 754.0], [62.0, 754.0], [62.1, 756.0], [62.2, 759.0], [62.3, 759.0], [62.4, 761.0], [62.5, 762.0], [62.6, 763.0], [62.7, 763.0], [62.8, 763.0], [62.9, 764.0], [63.0, 765.0], [63.1, 765.0], [63.2, 767.0], [63.3, 769.0], [63.4, 769.0], [63.5, 770.0], [63.6, 777.0], [63.7, 778.0], [63.8, 778.0], [63.9, 780.0], [64.0, 781.0], [64.1, 786.0], [64.2, 786.0], [64.3, 786.0], [64.4, 787.0], [64.5, 787.0], [64.6, 787.0], [64.7, 796.0], [64.8, 798.0], [64.9, 800.0], [65.0, 800.0], [65.1, 801.0], [65.2, 803.0], [65.3, 803.0], [65.4, 805.0], [65.5, 805.0], [65.6, 806.0], [65.7, 806.0], [65.8, 808.0], [65.9, 809.0], [66.0, 810.0], [66.1, 810.0], [66.2, 811.0], [66.3, 812.0], [66.4, 813.0], [66.5, 813.0], [66.6, 813.0], [66.7, 813.0], [66.8, 813.0], [66.9, 814.0], [67.0, 814.0], [67.1, 815.0], [67.2, 815.0], [67.3, 815.0], [67.4, 815.0], [67.5, 817.0], [67.6, 817.0], [67.7, 817.0], [67.8, 817.0], [67.9, 818.0], [68.0, 818.0], [68.1, 818.0], [68.2, 819.0], [68.3, 820.0], [68.4, 820.0], [68.5, 820.0], [68.6, 822.0], [68.7, 822.0], [68.8, 823.0], [68.9, 824.0], [69.0, 824.0], [69.1, 824.0], [69.2, 825.0], [69.3, 825.0], [69.4, 826.0], [69.5, 826.0], [69.6, 827.0], [69.7, 827.0], [69.8, 827.0], [69.9, 827.0], [70.0, 827.0], [70.1, 828.0], [70.2, 828.0], [70.3, 828.0], [70.4, 829.0], [70.5, 829.0], [70.6, 829.0], [70.7, 830.0], [70.8, 830.0], [70.9, 830.0], [71.0, 830.0], [71.1, 830.0], [71.2, 831.0], [71.3, 831.0], [71.4, 831.0], [71.5, 832.0], [71.6, 832.0], [71.7, 832.0], [71.8, 832.0], [71.9, 834.0], [72.0, 835.0], [72.1, 835.0], [72.2, 835.0], [72.3, 836.0], [72.4, 837.0], [72.5, 837.0], [72.6, 837.0], [72.7, 839.0], [72.8, 840.0], [72.9, 840.0], [73.0, 841.0], [73.1, 842.0], [73.2, 842.0], [73.3, 842.0], [73.4, 845.0], [73.5, 845.0], [73.6, 845.0], [73.7, 848.0], [73.8, 848.0], [73.9, 848.0], [74.0, 848.0], [74.1, 849.0], [74.2, 849.0], [74.3, 853.0], [74.4, 853.0], [74.5, 857.0], [74.6, 859.0], [74.7, 860.0], [74.8, 860.0], [74.9, 860.0], [75.0, 861.0], [75.1, 861.0], [75.2, 861.0], [75.3, 862.0], [75.4, 862.0], [75.5, 862.0], [75.6, 862.0], [75.7, 864.0], [75.8, 865.0], [75.9, 865.0], [76.0, 865.0], [76.1, 867.0], [76.2, 867.0], [76.3, 867.0], [76.4, 868.0], [76.5, 869.0], [76.6, 869.0], [76.7, 869.0], [76.8, 870.0], [76.9, 870.0], [77.0, 870.0], [77.1, 872.0], [77.2, 873.0], [77.3, 873.0], [77.4, 873.0], [77.5, 873.0], [77.6, 874.0], [77.7, 875.0], [77.8, 875.0], [77.9, 878.0], [78.0, 878.0], [78.1, 878.0], [78.2, 878.0], [78.3, 880.0], [78.4, 882.0], [78.5, 882.0], [78.6, 884.0], [78.7, 886.0], [78.8, 889.0], [78.9, 889.0], [79.0, 892.0], [79.1, 894.0], [79.2, 894.0], [79.3, 894.0], [79.4, 895.0], [79.5, 897.0], [79.6, 898.0], [79.7, 898.0], [79.8, 900.0], [79.9, 900.0], [80.0, 901.0], [80.1, 901.0], [80.2, 902.0], [80.3, 903.0], [80.4, 903.0], [80.5, 904.0], [80.6, 908.0], [80.7, 908.0], [80.8, 908.0], [80.9, 909.0], [81.0, 910.0], [81.1, 911.0], [81.2, 911.0], [81.3, 913.0], [81.4, 914.0], [81.5, 916.0], [81.6, 916.0], [81.7, 916.0], [81.8, 917.0], [81.9, 917.0], [82.0, 918.0], [82.1, 920.0], [82.2, 920.0], [82.3, 920.0], [82.4, 921.0], [82.5, 925.0], [82.6, 925.0], [82.7, 925.0], [82.8, 928.0], [82.9, 933.0], [83.0, 939.0], [83.1, 939.0], [83.2, 940.0], [83.3, 943.0], [83.4, 943.0], [83.5, 944.0], [83.6, 945.0], [83.7, 946.0], [83.8, 946.0], [83.9, 947.0], [84.0, 947.0], [84.1, 949.0], [84.2, 949.0], [84.3, 949.0], [84.4, 950.0], [84.5, 954.0], [84.6, 954.0], [84.7, 955.0], [84.8, 956.0], [84.9, 959.0], [85.0, 959.0], [85.1, 959.0], [85.2, 960.0], [85.3, 960.0], [85.4, 961.0], [85.5, 962.0], [85.6, 962.0], [85.7, 962.0], [85.8, 965.0], [85.9, 966.0], [86.0, 967.0], [86.1, 967.0], [86.2, 969.0], [86.3, 971.0], [86.4, 972.0], [86.5, 972.0], [86.6, 974.0], [86.7, 974.0], [86.8, 974.0], [86.9, 975.0], [87.0, 975.0], [87.1, 977.0], [87.2, 977.0], [87.3, 978.0], [87.4, 980.0], [87.5, 982.0], [87.6, 982.0], [87.7, 982.0], [87.8, 984.0], [87.9, 984.0], [88.0, 984.0], [88.1, 988.0], [88.2, 988.0], [88.3, 995.0], [88.4, 995.0], [88.5, 995.0], [88.6, 996.0], [88.7, 996.0], [88.8, 998.0], [88.9, 998.0], [89.0, 999.0], [89.1, 999.0], [89.2, 1002.0], [89.3, 1007.0], [89.4, 1009.0], [89.5, 1009.0], [89.6, 1015.0], [89.7, 1018.0], [89.8, 1019.0], [89.9, 1019.0], [90.0, 1021.0], [90.1, 1024.0], [90.2, 1024.0], [90.3, 1026.0], [90.4, 1028.0], [90.5, 1030.0], [90.6, 1030.0], [90.7, 1034.0], [90.8, 1036.0], [90.9, 1037.0], [91.0, 1037.0], [91.1, 1037.0], [91.2, 1037.0], [91.3, 1038.0], [91.4, 1038.0], [91.5, 1041.0], [91.6, 1047.0], [91.7, 1047.0], [91.8, 1048.0], [91.9, 1051.0], [92.0, 1056.0], [92.1, 1056.0], [92.2, 1057.0], [92.3, 1057.0], [92.4, 1065.0], [92.5, 1065.0], [92.6, 1067.0], [92.7, 1070.0], [92.8, 1072.0], [92.9, 1072.0], [93.0, 1075.0], [93.1, 1077.0], [93.2, 1089.0], [93.3, 1089.0], [93.4, 1120.0], [93.5, 1133.0], [93.6, 1133.0], [93.7, 1143.0], [93.8, 1153.0], [93.9, 1163.0], [94.0, 1163.0], [94.1, 1163.0], [94.2, 1165.0], [94.3, 1183.0], [94.4, 1183.0], [94.5, 1188.0], [94.6, 1208.0], [94.7, 1209.0], [94.8, 1209.0], [94.9, 1239.0], [95.0, 1255.0], [95.1, 1255.0], [95.2, 1265.0], [95.3, 1266.0], [95.4, 1267.0], [95.5, 1267.0], [95.6, 1297.0], [95.7, 1297.0], [95.8, 1297.0], [95.9, 1297.0], [96.0, 1299.0], [96.1, 1310.0], [96.2, 1322.0], [96.3, 1322.0], [96.4, 1329.0], [96.5, 1352.0], [96.6, 1352.0], [96.7, 1352.0], [96.8, 1359.0], [96.9, 1387.0], [97.0, 1387.0], [97.1, 1415.0], [97.2, 1462.0], [97.3, 1500.0], [97.4, 1500.0], [97.5, 1504.0], [97.6, 1526.0], [97.7, 1553.0], [97.8, 1553.0], [97.9, 1567.0], [98.0, 1591.0], [98.1, 1597.0], [98.2, 1597.0], [98.3, 1620.0], [98.4, 1762.0], [98.5, 1762.0], [98.6, 1942.0], [98.7, 1971.0], [98.8, 2000.0], [98.9, 2000.0], [99.0, 2475.0], [99.1, 2912.0], [99.2, 2928.0], [99.3, 2928.0], [99.4, 2986.0], [99.5, 3041.0], [99.6, 3236.0], [99.7, 3236.0], [99.8, 3297.0], [99.9, 3396.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 129.0, "series": [{"data": [[600.0, 129.0], [2400.0, 1.0], [700.0, 85.0], [2900.0, 3.0], [3000.0, 1.0], [200.0, 44.0], [800.0, 109.0], [3200.0, 2.0], [3300.0, 1.0], [900.0, 69.0], [1000.0, 31.0], [1100.0, 9.0], [300.0, 81.0], [1200.0, 11.0], [1300.0, 7.0], [1400.0, 2.0], [1500.0, 7.0], [100.0, 31.0], [400.0, 68.0], [1600.0, 1.0], [1700.0, 1.0], [1900.0, 2.0], [500.0, 39.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 492.0, "series": [{"data": [[0.0, 224.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 492.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 19.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60263384E12, "maxY": 1.0, "series": [{"data": [[1.60263408E12, 1.0], [1.60263426E12, 1.0], [1.60263396E12, 1.0], [1.60263414E12, 1.0], [1.60263432E12, 1.0], [1.60263384E12, 1.0], [1.60263402E12, 1.0], [1.6026342E12, 1.0], [1.60263438E12, 1.0], [1.6026339E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263438E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 699.2272108843534, "minX": 1.0, "maxY": 699.2272108843534, "series": [{"data": [[1.0, 699.2272108843534]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 699.2272108843534]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 113.28333333333333, "minX": 1.60263384E12, "maxY": 298402.63333333336, "series": [{"data": [[1.60263408E12, 223377.78333333333], [1.60263426E12, 178818.85], [1.60263396E12, 163801.08333333334], [1.60263414E12, 262201.3], [1.60263432E12, 185467.3], [1.60263384E12, 84383.91666666667], [1.60263402E12, 166916.61666666667], [1.6026342E12, 167915.43333333332], [1.60263438E12, 104496.08333333333], [1.6026339E12, 298402.63333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263408E12, 846.9833333333333], [1.60263426E12, 567.6666666666666], [1.60263396E12, 552.8333333333334], [1.60263414E12, 674.0666666666667], [1.60263432E12, 731.4333333333333], [1.60263384E12, 113.28333333333333], [1.60263402E12, 544.1166666666667], [1.6026342E12, 552.8166666666667], [1.60263438E12, 311.5833333333333], [1.6026339E12, 628.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263438E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 505.62790697674427, "minX": 1.60263384E12, "maxY": 840.2666666666667, "series": [{"data": [[1.60263408E12, 524.9210526315792], [1.60263426E12, 800.12], [1.60263396E12, 823.2602739726027], [1.60263414E12, 666.0444444444444], [1.60263432E12, 618.8969072164952], [1.60263384E12, 840.2666666666667], [1.60263402E12, 830.0972222222222], [1.6026342E12, 815.0958904109589], [1.60263438E12, 505.62790697674427], [1.6026339E12, 727.6144578313254]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263438E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 504.5348837209303, "minX": 1.60263384E12, "maxY": 838.1999999999998, "series": [{"data": [[1.60263408E12, 524.0087719298245], [1.60263426E12, 799.0666666666668], [1.60263396E12, 822.0958904109588], [1.60263414E12, 664.7444444444442], [1.60263432E12, 617.8247422680415], [1.60263384E12, 838.1999999999998], [1.60263402E12, 828.75], [1.6026342E12, 813.972602739726], [1.60263438E12, 504.5348837209303], [1.6026339E12, 726.277108433735]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263438E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60263384E12, "maxY": 2.2, "series": [{"data": [[1.60263408E12, 0.026315789473684213], [1.60263426E12, 0.02666666666666667], [1.60263396E12, 0.027397260273972605], [1.60263414E12, 0.03333333333333333], [1.60263432E12, 0.020618556701030934], [1.60263384E12, 2.2], [1.60263402E12, 0.02777777777777778], [1.6026342E12, 0.027397260273972605], [1.60263438E12, 0.0], [1.6026339E12, 0.04819277108433735]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263438E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 168.0, "minX": 1.60263384E12, "maxY": 3396.0, "series": [{"data": [[1.60263408E12, 2475.0], [1.60263426E12, 1165.0], [1.60263396E12, 2986.0], [1.60263414E12, 3297.0], [1.60263432E12, 1971.0], [1.60263384E12, 3236.0], [1.60263402E12, 3041.0], [1.6026342E12, 1297.0], [1.60263438E12, 1553.0], [1.6026339E12, 3396.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263408E12, 168.03499997258186], [1.60263426E12, 313.0], [1.60263396E12, 448.0], [1.60263414E12, 182.0], [1.60263432E12, 187.0], [1.60263384E12, 180.0], [1.60263402E12, 633.0], [1.6026342E12, 557.0], [1.60263438E12, 271.0], [1.6026339E12, 188.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263408E12, 168.13850001096725], [1.60263426E12, 313.0], [1.60263396E12, 448.0], [1.60263414E12, 182.0], [1.60263432E12, 187.0], [1.60263384E12, 180.0], [1.60263402E12, 633.0], [1.6026342E12, 557.0], [1.60263438E12, 271.0], [1.6026339E12, 188.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263408E12, 168.09249998629093], [1.60263426E12, 313.0], [1.60263396E12, 448.0], [1.60263414E12, 182.0], [1.60263432E12, 187.0], [1.60263384E12, 180.0], [1.60263402E12, 633.0], [1.6026342E12, 557.0], [1.60263438E12, 271.0], [1.6026339E12, 188.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263408E12, 168.0], [1.60263426E12, 313.0], [1.60263396E12, 448.0], [1.60263414E12, 182.0], [1.60263432E12, 187.0], [1.60263384E12, 180.0], [1.60263402E12, 633.0], [1.6026342E12, 557.0], [1.60263438E12, 271.0], [1.6026339E12, 188.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263408E12, 414.0], [1.60263426E12, 813.0], [1.60263396E12, 747.0], [1.60263414E12, 544.5], [1.60263432E12, 644.0], [1.60263384E12, 656.0], [1.60263402E12, 808.0], [1.6026342E12, 787.0], [1.60263438E12, 323.0], [1.6026339E12, 605.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263438E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 199.0, "minX": 1.0, "maxY": 839.0, "series": [{"data": [[1.0, 839.0], [2.0, 680.0], [4.0, 302.0], [5.0, 199.0], [3.0, 324.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 199.0, "minX": 1.0, "maxY": 838.0, "series": [{"data": [[1.0, 838.0], [2.0, 679.0], [4.0, 302.0], [5.0, 199.0], [3.0, 324.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60263384E12, "maxY": 1.9, "series": [{"data": [[1.60263408E12, 1.9], [1.60263426E12, 1.25], [1.60263396E12, 1.2166666666666666], [1.60263414E12, 1.5], [1.60263432E12, 1.6166666666666667], [1.60263384E12, 0.26666666666666666], [1.60263402E12, 1.2], [1.6026342E12, 1.2166666666666666], [1.60263438E12, 0.7], [1.6026339E12, 1.3833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263438E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60263384E12, "maxY": 1.9, "series": [{"data": [[1.60263408E12, 1.9], [1.60263426E12, 1.25], [1.60263396E12, 1.2166666666666666], [1.60263414E12, 1.5], [1.60263432E12, 1.6166666666666667], [1.60263384E12, 0.25], [1.60263402E12, 1.2], [1.6026342E12, 1.2166666666666666], [1.60263438E12, 0.7166666666666667], [1.6026339E12, 1.3833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263438E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60263384E12, "maxY": 1.9, "series": [{"data": [[1.60263408E12, 1.9], [1.60263426E12, 1.25], [1.60263396E12, 1.2166666666666666], [1.60263414E12, 1.5], [1.60263432E12, 1.6166666666666667], [1.60263384E12, 0.25], [1.60263402E12, 1.2], [1.6026342E12, 1.2166666666666666], [1.60263438E12, 0.7166666666666667], [1.6026339E12, 1.3833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263438E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.60263384E12, "maxY": 1.9, "series": [{"data": [[1.60263408E12, 1.9], [1.60263426E12, 1.25], [1.60263396E12, 1.2166666666666666], [1.60263414E12, 1.5], [1.60263432E12, 1.6166666666666667], [1.60263384E12, 0.25], [1.60263402E12, 1.2], [1.6026342E12, 1.2166666666666666], [1.60263438E12, 0.7166666666666667], [1.6026339E12, 1.3833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263438E12, "title": "Total Transactions Per Second"}},
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

