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
        data: {"result": {"minY": 167.0, "minX": 0.0, "maxY": 3398.0, "series": [{"data": [[0.0, 167.0], [0.1, 167.0], [0.2, 170.0], [0.3, 184.0], [0.4, 184.0], [0.5, 187.0], [0.6, 187.0], [0.7, 187.0], [0.8, 187.0], [0.9, 189.0], [1.0, 189.0], [1.1, 189.0], [1.2, 189.0], [1.3, 189.0], [1.4, 190.0], [1.5, 190.0], [1.6, 190.0], [1.7, 191.0], [1.8, 191.0], [1.9, 191.0], [2.0, 192.0], [2.1, 193.0], [2.2, 193.0], [2.3, 193.0], [2.4, 193.0], [2.5, 194.0], [2.6, 196.0], [2.7, 196.0], [2.8, 196.0], [2.9, 198.0], [3.0, 198.0], [3.1, 198.0], [3.2, 198.0], [3.3, 199.0], [3.4, 199.0], [3.5, 201.0], [3.6, 203.0], [3.7, 204.0], [3.8, 204.0], [3.9, 204.0], [4.0, 205.0], [4.1, 205.0], [4.2, 205.0], [4.3, 206.0], [4.4, 206.0], [4.5, 206.0], [4.6, 206.0], [4.7, 206.0], [4.8, 207.0], [4.9, 207.0], [5.0, 207.0], [5.1, 209.0], [5.2, 209.0], [5.3, 209.0], [5.4, 209.0], [5.5, 209.0], [5.6, 210.0], [5.7, 210.0], [5.8, 211.0], [5.9, 211.0], [6.0, 211.0], [6.1, 211.0], [6.2, 212.0], [6.3, 213.0], [6.4, 214.0], [6.5, 214.0], [6.6, 217.0], [6.7, 217.0], [6.8, 217.0], [6.9, 219.0], [7.0, 219.0], [7.1, 221.0], [7.2, 221.0], [7.3, 222.0], [7.4, 233.0], [7.5, 236.0], [7.6, 236.0], [7.7, 239.0], [7.8, 274.0], [7.9, 274.0], [8.0, 274.0], [8.1, 276.0], [8.2, 280.0], [8.3, 281.0], [8.4, 281.0], [8.5, 282.0], [8.6, 285.0], [8.7, 285.0], [8.8, 287.0], [8.9, 287.0], [9.0, 291.0], [9.1, 291.0], [9.2, 293.0], [9.3, 294.0], [9.4, 295.0], [9.5, 295.0], [9.6, 295.0], [9.7, 295.0], [9.8, 295.0], [9.9, 295.0], [10.0, 295.0], [10.1, 296.0], [10.2, 296.0], [10.3, 298.0], [10.4, 299.0], [10.5, 300.0], [10.6, 300.0], [10.7, 300.0], [10.8, 301.0], [10.9, 301.0], [11.0, 301.0], [11.1, 302.0], [11.2, 303.0], [11.3, 303.0], [11.4, 303.0], [11.5, 303.0], [11.6, 303.0], [11.7, 303.0], [11.8, 304.0], [11.9, 304.0], [12.0, 305.0], [12.1, 305.0], [12.2, 305.0], [12.3, 305.0], [12.4, 307.0], [12.5, 307.0], [12.6, 307.0], [12.7, 308.0], [12.8, 308.0], [12.9, 308.0], [13.0, 308.0], [13.1, 308.0], [13.2, 308.0], [13.3, 308.0], [13.4, 310.0], [13.5, 310.0], [13.6, 310.0], [13.7, 310.0], [13.8, 311.0], [13.9, 311.0], [14.0, 311.0], [14.1, 312.0], [14.2, 313.0], [14.3, 314.0], [14.4, 314.0], [14.5, 315.0], [14.6, 316.0], [14.7, 317.0], [14.8, 317.0], [14.9, 317.0], [15.0, 318.0], [15.1, 318.0], [15.2, 319.0], [15.3, 319.0], [15.4, 319.0], [15.5, 319.0], [15.6, 319.0], [15.7, 320.0], [15.8, 321.0], [15.9, 321.0], [16.0, 321.0], [16.1, 322.0], [16.2, 323.0], [16.3, 323.0], [16.4, 323.0], [16.5, 323.0], [16.6, 323.0], [16.7, 323.0], [16.8, 324.0], [16.9, 328.0], [17.0, 328.0], [17.1, 329.0], [17.2, 329.0], [17.3, 329.0], [17.4, 329.0], [17.5, 333.0], [17.6, 335.0], [17.7, 337.0], [17.8, 337.0], [17.9, 339.0], [18.0, 340.0], [18.1, 341.0], [18.2, 341.0], [18.3, 341.0], [18.4, 343.0], [18.5, 343.0], [18.6, 344.0], [18.7, 345.0], [18.8, 345.0], [18.9, 345.0], [19.0, 346.0], [19.1, 347.0], [19.2, 347.0], [19.3, 347.0], [19.4, 347.0], [19.5, 349.0], [19.6, 349.0], [19.7, 349.0], [19.8, 350.0], [19.9, 350.0], [20.0, 350.0], [20.1, 350.0], [20.2, 351.0], [20.3, 351.0], [20.4, 351.0], [20.5, 354.0], [20.6, 354.0], [20.7, 355.0], [20.8, 355.0], [20.9, 355.0], [21.0, 358.0], [21.1, 369.0], [21.2, 369.0], [21.3, 370.0], [21.4, 397.0], [21.5, 406.0], [21.6, 406.0], [21.7, 407.0], [21.8, 407.0], [21.9, 407.0], [22.0, 408.0], [22.1, 409.0], [22.2, 409.0], [22.3, 409.0], [22.4, 411.0], [22.5, 411.0], [22.6, 413.0], [22.7, 413.0], [22.8, 415.0], [22.9, 416.0], [23.0, 416.0], [23.1, 416.0], [23.2, 417.0], [23.3, 420.0], [23.4, 420.0], [23.5, 421.0], [23.6, 422.0], [23.7, 423.0], [23.8, 423.0], [23.9, 424.0], [24.0, 424.0], [24.1, 425.0], [24.2, 425.0], [24.3, 426.0], [24.4, 426.0], [24.5, 427.0], [24.6, 427.0], [24.7, 428.0], [24.8, 428.0], [24.9, 428.0], [25.0, 428.0], [25.1, 429.0], [25.2, 430.0], [25.3, 430.0], [25.4, 431.0], [25.5, 434.0], [25.6, 434.0], [25.7, 434.0], [25.8, 435.0], [25.9, 435.0], [26.0, 436.0], [26.1, 436.0], [26.2, 436.0], [26.3, 437.0], [26.4, 438.0], [26.5, 438.0], [26.6, 438.0], [26.7, 438.0], [26.8, 438.0], [26.9, 439.0], [27.0, 440.0], [27.1, 440.0], [27.2, 440.0], [27.3, 446.0], [27.4, 446.0], [27.5, 446.0], [27.6, 446.0], [27.7, 449.0], [27.8, 450.0], [27.9, 454.0], [28.0, 454.0], [28.1, 454.0], [28.2, 455.0], [28.3, 455.0], [28.4, 455.0], [28.5, 458.0], [28.6, 460.0], [28.7, 460.0], [28.8, 460.0], [28.9, 463.0], [29.0, 467.0], [29.1, 467.0], [29.2, 467.0], [29.3, 468.0], [29.4, 469.0], [29.5, 469.0], [29.6, 470.0], [29.7, 471.0], [29.8, 471.0], [29.9, 471.0], [30.0, 489.0], [30.1, 492.0], [30.2, 492.0], [30.3, 497.0], [30.4, 499.0], [30.5, 501.0], [30.6, 501.0], [30.7, 508.0], [30.8, 514.0], [30.9, 521.0], [31.0, 521.0], [31.1, 523.0], [31.2, 525.0], [31.3, 526.0], [31.4, 526.0], [31.5, 530.0], [31.6, 530.0], [31.7, 530.0], [31.8, 530.0], [31.9, 531.0], [32.0, 531.0], [32.1, 531.0], [32.2, 532.0], [32.3, 533.0], [32.4, 534.0], [32.5, 534.0], [32.6, 534.0], [32.7, 538.0], [32.8, 539.0], [32.9, 539.0], [33.0, 541.0], [33.1, 541.0], [33.2, 542.0], [33.3, 542.0], [33.4, 544.0], [33.5, 546.0], [33.6, 546.0], [33.7, 547.0], [33.8, 552.0], [33.9, 555.0], [34.0, 555.0], [34.1, 556.0], [34.2, 558.0], [34.3, 558.0], [34.4, 558.0], [34.5, 560.0], [34.6, 560.0], [34.7, 561.0], [34.8, 561.0], [34.9, 569.0], [35.0, 574.0], [35.1, 574.0], [35.2, 581.0], [35.3, 590.0], [35.4, 595.0], [35.5, 595.0], [35.6, 597.0], [35.7, 605.0], [35.8, 628.0], [35.9, 628.0], [36.0, 630.0], [36.1, 640.0], [36.2, 642.0], [36.3, 642.0], [36.4, 644.0], [36.5, 645.0], [36.6, 645.0], [36.7, 645.0], [36.8, 648.0], [36.9, 648.0], [37.0, 648.0], [37.1, 648.0], [37.2, 648.0], [37.3, 648.0], [37.4, 648.0], [37.5, 649.0], [37.6, 649.0], [37.7, 650.0], [37.8, 650.0], [37.9, 650.0], [38.0, 650.0], [38.1, 650.0], [38.2, 650.0], [38.3, 650.0], [38.4, 651.0], [38.5, 651.0], [38.6, 652.0], [38.7, 652.0], [38.8, 653.0], [38.9, 653.0], [39.0, 653.0], [39.1, 654.0], [39.2, 654.0], [39.3, 654.0], [39.4, 654.0], [39.5, 655.0], [39.6, 655.0], [39.7, 655.0], [39.8, 655.0], [39.9, 657.0], [40.0, 659.0], [40.1, 659.0], [40.2, 659.0], [40.3, 659.0], [40.4, 659.0], [40.5, 660.0], [40.6, 660.0], [40.7, 660.0], [40.8, 660.0], [40.9, 660.0], [41.0, 660.0], [41.1, 661.0], [41.2, 661.0], [41.3, 662.0], [41.4, 662.0], [41.5, 662.0], [41.6, 662.0], [41.7, 662.0], [41.8, 663.0], [41.9, 663.0], [42.0, 663.0], [42.1, 663.0], [42.2, 663.0], [42.3, 663.0], [42.4, 663.0], [42.5, 663.0], [42.6, 664.0], [42.7, 664.0], [42.8, 664.0], [42.9, 666.0], [43.0, 666.0], [43.1, 666.0], [43.2, 667.0], [43.3, 667.0], [43.4, 667.0], [43.5, 668.0], [43.6, 668.0], [43.7, 668.0], [43.8, 668.0], [43.9, 669.0], [44.0, 669.0], [44.1, 670.0], [44.2, 670.0], [44.3, 671.0], [44.4, 671.0], [44.5, 672.0], [44.6, 672.0], [44.7, 672.0], [44.8, 673.0], [44.9, 673.0], [45.0, 673.0], [45.1, 673.0], [45.2, 673.0], [45.3, 673.0], [45.4, 673.0], [45.5, 674.0], [45.6, 675.0], [45.7, 675.0], [45.8, 675.0], [45.9, 675.0], [46.0, 675.0], [46.1, 675.0], [46.2, 676.0], [46.3, 676.0], [46.4, 677.0], [46.5, 677.0], [46.6, 678.0], [46.7, 678.0], [46.8, 678.0], [46.9, 678.0], [47.0, 679.0], [47.1, 680.0], [47.2, 680.0], [47.3, 680.0], [47.4, 680.0], [47.5, 681.0], [47.6, 681.0], [47.7, 681.0], [47.8, 682.0], [47.9, 682.0], [48.0, 682.0], [48.1, 682.0], [48.2, 683.0], [48.3, 683.0], [48.4, 683.0], [48.5, 684.0], [48.6, 685.0], [48.7, 685.0], [48.8, 685.0], [48.9, 687.0], [49.0, 687.0], [49.1, 687.0], [49.2, 688.0], [49.3, 688.0], [49.4, 688.0], [49.5, 688.0], [49.6, 689.0], [49.7, 689.0], [49.8, 689.0], [49.9, 689.0], [50.0, 690.0], [50.1, 692.0], [50.2, 692.0], [50.3, 692.0], [50.4, 693.0], [50.5, 693.0], [50.6, 693.0], [50.7, 693.0], [50.8, 693.0], [50.9, 693.0], [51.0, 693.0], [51.1, 693.0], [51.2, 693.0], [51.3, 694.0], [51.4, 694.0], [51.5, 694.0], [51.6, 695.0], [51.7, 695.0], [51.8, 696.0], [51.9, 697.0], [52.0, 697.0], [52.1, 697.0], [52.2, 698.0], [52.3, 698.0], [52.4, 699.0], [52.5, 699.0], [52.6, 699.0], [52.7, 699.0], [52.8, 701.0], [52.9, 701.0], [53.0, 702.0], [53.1, 703.0], [53.2, 703.0], [53.3, 703.0], [53.4, 703.0], [53.5, 703.0], [53.6, 703.0], [53.7, 704.0], [53.8, 704.0], [53.9, 705.0], [54.0, 705.0], [54.1, 706.0], [54.2, 708.0], [54.3, 710.0], [54.4, 710.0], [54.5, 710.0], [54.6, 711.0], [54.7, 712.0], [54.8, 712.0], [54.9, 712.0], [55.0, 714.0], [55.1, 714.0], [55.2, 715.0], [55.3, 716.0], [55.4, 716.0], [55.5, 716.0], [55.6, 719.0], [55.7, 719.0], [55.8, 720.0], [55.9, 720.0], [56.0, 721.0], [56.1, 722.0], [56.2, 722.0], [56.3, 722.0], [56.4, 723.0], [56.5, 723.0], [56.6, 723.0], [56.7, 723.0], [56.8, 724.0], [56.9, 725.0], [57.0, 725.0], [57.1, 728.0], [57.2, 729.0], [57.3, 729.0], [57.4, 729.0], [57.5, 730.0], [57.6, 730.0], [57.7, 731.0], [57.8, 731.0], [57.9, 732.0], [58.0, 732.0], [58.1, 733.0], [58.2, 733.0], [58.3, 733.0], [58.4, 736.0], [58.5, 736.0], [58.6, 736.0], [58.7, 737.0], [58.8, 739.0], [58.9, 739.0], [59.0, 739.0], [59.1, 740.0], [59.2, 741.0], [59.3, 741.0], [59.4, 741.0], [59.5, 742.0], [59.6, 745.0], [59.7, 745.0], [59.8, 745.0], [59.9, 745.0], [60.0, 745.0], [60.1, 745.0], [60.2, 746.0], [60.3, 747.0], [60.4, 747.0], [60.5, 747.0], [60.6, 747.0], [60.7, 750.0], [60.8, 750.0], [60.9, 750.0], [61.0, 751.0], [61.1, 751.0], [61.2, 751.0], [61.3, 752.0], [61.4, 756.0], [61.5, 756.0], [61.6, 756.0], [61.7, 756.0], [61.8, 758.0], [61.9, 758.0], [62.0, 759.0], [62.1, 764.0], [62.2, 764.0], [62.3, 764.0], [62.4, 767.0], [62.5, 768.0], [62.6, 769.0], [62.7, 769.0], [62.8, 770.0], [62.9, 770.0], [63.0, 771.0], [63.1, 771.0], [63.2, 771.0], [63.3, 773.0], [63.4, 773.0], [63.5, 775.0], [63.6, 775.0], [63.7, 775.0], [63.8, 775.0], [63.9, 777.0], [64.0, 777.0], [64.1, 779.0], [64.2, 779.0], [64.3, 779.0], [64.4, 780.0], [64.5, 784.0], [64.6, 784.0], [64.7, 786.0], [64.8, 789.0], [64.9, 790.0], [65.0, 790.0], [65.1, 793.0], [65.2, 796.0], [65.3, 796.0], [65.4, 800.0], [65.5, 800.0], [65.6, 801.0], [65.7, 801.0], [65.8, 808.0], [65.9, 810.0], [66.0, 811.0], [66.1, 811.0], [66.2, 811.0], [66.3, 812.0], [66.4, 815.0], [66.5, 815.0], [66.6, 815.0], [66.7, 816.0], [66.8, 816.0], [66.9, 817.0], [67.0, 818.0], [67.1, 818.0], [67.2, 818.0], [67.3, 820.0], [67.4, 821.0], [67.5, 822.0], [67.6, 822.0], [67.7, 822.0], [67.8, 822.0], [67.9, 822.0], [68.0, 822.0], [68.1, 824.0], [68.2, 825.0], [68.3, 827.0], [68.4, 827.0], [68.5, 828.0], [68.6, 828.0], [68.7, 828.0], [68.8, 829.0], [68.9, 831.0], [69.0, 831.0], [69.1, 831.0], [69.2, 831.0], [69.3, 831.0], [69.4, 831.0], [69.5, 831.0], [69.6, 832.0], [69.7, 832.0], [69.8, 832.0], [69.9, 832.0], [70.0, 834.0], [70.1, 834.0], [70.2, 834.0], [70.3, 835.0], [70.4, 835.0], [70.5, 836.0], [70.6, 836.0], [70.7, 836.0], [70.8, 837.0], [70.9, 837.0], [71.0, 837.0], [71.1, 838.0], [71.2, 840.0], [71.3, 840.0], [71.4, 840.0], [71.5, 840.0], [71.6, 841.0], [71.7, 841.0], [71.8, 841.0], [71.9, 841.0], [72.0, 842.0], [72.1, 842.0], [72.2, 843.0], [72.3, 843.0], [72.4, 844.0], [72.5, 844.0], [72.6, 845.0], [72.7, 845.0], [72.8, 846.0], [72.9, 846.0], [73.0, 847.0], [73.1, 848.0], [73.2, 850.0], [73.3, 850.0], [73.4, 852.0], [73.5, 854.0], [73.6, 854.0], [73.7, 854.0], [73.8, 855.0], [73.9, 860.0], [74.0, 860.0], [74.1, 861.0], [74.2, 861.0], [74.3, 864.0], [74.4, 864.0], [74.5, 864.0], [74.6, 864.0], [74.7, 865.0], [74.8, 865.0], [74.9, 867.0], [75.0, 867.0], [75.1, 867.0], [75.2, 868.0], [75.3, 868.0], [75.4, 868.0], [75.5, 868.0], [75.6, 869.0], [75.7, 869.0], [75.8, 870.0], [75.9, 870.0], [76.0, 870.0], [76.1, 871.0], [76.2, 871.0], [76.3, 871.0], [76.4, 872.0], [76.5, 872.0], [76.6, 872.0], [76.7, 872.0], [76.8, 874.0], [76.9, 874.0], [77.0, 874.0], [77.1, 878.0], [77.2, 878.0], [77.3, 878.0], [77.4, 878.0], [77.5, 878.0], [77.6, 879.0], [77.7, 880.0], [77.8, 880.0], [77.9, 880.0], [78.0, 884.0], [78.1, 884.0], [78.2, 884.0], [78.3, 886.0], [78.4, 888.0], [78.5, 888.0], [78.6, 889.0], [78.7, 891.0], [78.8, 892.0], [78.9, 892.0], [79.0, 892.0], [79.1, 892.0], [79.2, 894.0], [79.3, 894.0], [79.4, 897.0], [79.5, 898.0], [79.6, 898.0], [79.7, 898.0], [79.8, 900.0], [79.9, 901.0], [80.0, 905.0], [80.1, 905.0], [80.2, 908.0], [80.3, 909.0], [80.4, 909.0], [80.5, 909.0], [80.6, 909.0], [80.7, 912.0], [80.8, 912.0], [80.9, 912.0], [81.0, 913.0], [81.1, 914.0], [81.2, 914.0], [81.3, 916.0], [81.4, 920.0], [81.5, 920.0], [81.6, 920.0], [81.7, 921.0], [81.8, 922.0], [81.9, 922.0], [82.0, 922.0], [82.1, 923.0], [82.2, 926.0], [82.3, 926.0], [82.4, 926.0], [82.5, 926.0], [82.6, 935.0], [82.7, 935.0], [82.8, 938.0], [82.9, 938.0], [83.0, 940.0], [83.1, 940.0], [83.2, 942.0], [83.3, 945.0], [83.4, 945.0], [83.5, 946.0], [83.6, 950.0], [83.7, 951.0], [83.8, 951.0], [83.9, 953.0], [84.0, 955.0], [84.1, 955.0], [84.2, 955.0], [84.3, 956.0], [84.4, 957.0], [84.5, 957.0], [84.6, 957.0], [84.7, 957.0], [84.8, 958.0], [84.9, 958.0], [85.0, 958.0], [85.1, 961.0], [85.2, 962.0], [85.3, 962.0], [85.4, 962.0], [85.5, 963.0], [85.6, 965.0], [85.7, 965.0], [85.8, 965.0], [85.9, 967.0], [86.0, 968.0], [86.1, 968.0], [86.2, 972.0], [86.3, 973.0], [86.4, 974.0], [86.5, 974.0], [86.6, 974.0], [86.7, 975.0], [86.8, 975.0], [86.9, 976.0], [87.0, 981.0], [87.1, 983.0], [87.2, 983.0], [87.3, 984.0], [87.4, 985.0], [87.5, 987.0], [87.6, 987.0], [87.7, 987.0], [87.8, 990.0], [87.9, 990.0], [88.0, 990.0], [88.1, 992.0], [88.2, 993.0], [88.3, 999.0], [88.4, 999.0], [88.5, 1004.0], [88.6, 1004.0], [88.7, 1004.0], [88.8, 1007.0], [88.9, 1007.0], [89.0, 1012.0], [89.1, 1012.0], [89.2, 1015.0], [89.3, 1016.0], [89.4, 1017.0], [89.5, 1017.0], [89.6, 1018.0], [89.7, 1019.0], [89.8, 1019.0], [89.9, 1019.0], [90.0, 1020.0], [90.1, 1022.0], [90.2, 1022.0], [90.3, 1023.0], [90.4, 1024.0], [90.5, 1025.0], [90.6, 1025.0], [90.7, 1027.0], [90.8, 1028.0], [90.9, 1031.0], [91.0, 1031.0], [91.1, 1033.0], [91.2, 1034.0], [91.3, 1034.0], [91.4, 1034.0], [91.5, 1040.0], [91.6, 1041.0], [91.7, 1041.0], [91.8, 1041.0], [91.9, 1041.0], [92.0, 1041.0], [92.1, 1041.0], [92.2, 1051.0], [92.3, 1056.0], [92.4, 1058.0], [92.5, 1058.0], [92.6, 1060.0], [92.7, 1063.0], [92.8, 1081.0], [92.9, 1081.0], [93.0, 1084.0], [93.1, 1085.0], [93.2, 1109.0], [93.3, 1109.0], [93.4, 1122.0], [93.5, 1141.0], [93.6, 1141.0], [93.7, 1146.0], [93.8, 1159.0], [93.9, 1159.0], [94.0, 1159.0], [94.1, 1162.0], [94.2, 1170.0], [94.3, 1173.0], [94.4, 1173.0], [94.5, 1180.0], [94.6, 1196.0], [94.7, 1222.0], [94.8, 1222.0], [94.9, 1231.0], [95.0, 1233.0], [95.1, 1233.0], [95.2, 1237.0], [95.3, 1243.0], [95.4, 1247.0], [95.5, 1247.0], [95.6, 1249.0], [95.7, 1252.0], [95.8, 1256.0], [95.9, 1256.0], [96.0, 1274.0], [96.1, 1315.0], [96.2, 1333.0], [96.3, 1333.0], [96.4, 1339.0], [96.5, 1340.0], [96.6, 1341.0], [96.7, 1341.0], [96.8, 1345.0], [96.9, 1352.0], [97.0, 1352.0], [97.1, 1359.0], [97.2, 1455.0], [97.3, 1462.0], [97.4, 1462.0], [97.5, 1498.0], [97.6, 1532.0], [97.7, 1550.0], [97.8, 1550.0], [97.9, 1581.0], [98.0, 1583.0], [98.1, 1661.0], [98.2, 1661.0], [98.3, 1669.0], [98.4, 1800.0], [98.5, 1800.0], [98.6, 1952.0], [98.7, 1986.0], [98.8, 2008.0], [98.9, 2008.0], [99.0, 2472.0], [99.1, 3005.0], [99.2, 3035.0], [99.3, 3035.0], [99.4, 3035.0], [99.5, 3058.0], [99.6, 3180.0], [99.7, 3180.0], [99.8, 3224.0], [99.9, 3398.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 126.0, "series": [{"data": [[600.0, 126.0], [2400.0, 1.0], [700.0, 92.0], [3000.0, 4.0], [3100.0, 1.0], [200.0, 52.0], [800.0, 106.0], [3300.0, 1.0], [3200.0, 1.0], [900.0, 64.0], [1000.0, 35.0], [1100.0, 11.0], [300.0, 81.0], [1200.0, 10.0], [1300.0, 8.0], [1400.0, 3.0], [1500.0, 4.0], [400.0, 66.0], [100.0, 25.0], [1600.0, 2.0], [1800.0, 1.0], [1900.0, 2.0], [500.0, 38.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 493.0, "series": [{"data": [[0.0, 224.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 493.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60280664E12, "maxY": 1.0, "series": [{"data": [[1.602807E12, 1.0], [1.6028067E12, 1.0], [1.60280664E12, 1.0], [1.60280712E12, 1.0], [1.60280682E12, 1.0], [1.60280676E12, 1.0], [1.60280694E12, 1.0], [1.60280688E12, 1.0], [1.60280706E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280712E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 700.7578231292518, "minX": 1.0, "maxY": 700.7578231292518, "series": [{"data": [[1.0, 700.7578231292518]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 700.7578231292518]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 514.7, "minX": 1.60280664E12, "maxY": 329035.31666666665, "series": [{"data": [[1.602807E12, 179545.53333333333], [1.6028067E12, 177415.53333333333], [1.60280664E12, 329035.31666666665], [1.60280712E12, 185779.6], [1.60280682E12, 202318.38333333333], [1.60280676E12, 169663.93333333332], [1.60280694E12, 171909.7], [1.60280688E12, 265374.8333333333], [1.60280706E12, 154714.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602807E12, 560.1333333333333], [1.6028067E12, 522.6], [1.60280664E12, 643.3166666666667], [1.60280712E12, 514.7], [1.60280682E12, 766.2666666666667], [1.60280676E12, 536.6833333333333], [1.60280694E12, 530.1166666666667], [1.60280688E12, 762.2166666666667], [1.60280706E12, 687.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280712E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 555.0571428571432, "minX": 1.60280664E12, "maxY": 869.7857142857146, "series": [{"data": [[1.602807E12, 813.4864864864862], [1.6028067E12, 860.5072463768116], [1.60280664E12, 672.6588235294116], [1.60280712E12, 555.0571428571432], [1.60280682E12, 593.3725490196078], [1.60280676E12, 842.0140845070421], [1.60280694E12, 869.7857142857146], [1.60280688E12, 566.9126213592235], [1.60280706E12, 657.9120879120879]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280712E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 553.8571428571429, "minX": 1.60280664E12, "maxY": 868.5428571428571, "series": [{"data": [[1.602807E12, 812.4189189189186], [1.6028067E12, 859.1594202898553], [1.60280664E12, 671.129411764706], [1.60280712E12, 553.8571428571429], [1.60280682E12, 592.3627450980393], [1.60280676E12, 840.7183098591549], [1.60280694E12, 868.5428571428571], [1.60280688E12, 565.7184466019417], [1.60280706E12, 657.1538461538461]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280712E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60280664E12, "maxY": 0.47058823529411753, "series": [{"data": [[1.602807E12, 0.013513513513513514], [1.6028067E12, 0.02898550724637683], [1.60280664E12, 0.47058823529411753], [1.60280712E12, 0.0], [1.60280682E12, 0.019607843137254905], [1.60280676E12, 0.04225352112676058], [1.60280694E12, 0.04285714285714287], [1.60280688E12, 0.01941747572815536], [1.60280706E12, 0.01098901098901099]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280712E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 167.0, "minX": 1.60280664E12, "maxY": 3398.0, "series": [{"data": [[1.602807E12, 1162.0], [1.6028067E12, 3398.0], [1.60280664E12, 3180.0], [1.60280712E12, 2008.0], [1.60280682E12, 3058.0], [1.60280676E12, 3035.0], [1.60280694E12, 3035.0], [1.60280688E12, 3224.0], [1.60280706E12, 1034.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.602807E12, 323.0], [1.6028067E12, 446.0], [1.60280664E12, 170.0], [1.60280712E12, 193.0], [1.60280682E12, 190.0], [1.60280676E12, 644.0], [1.60280694E12, 560.0], [1.60280688E12, 167.0], [1.60280706E12, 397.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.602807E12, 323.0], [1.6028067E12, 446.0], [1.60280664E12, 170.0], [1.60280712E12, 193.0], [1.60280682E12, 190.05910002946854], [1.60280676E12, 644.0], [1.60280694E12, 560.0], [1.60280688E12, 167.50320016860962], [1.60280706E12, 397.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.602807E12, 323.0], [1.6028067E12, 446.0], [1.60280664E12, 170.0], [1.60280712E12, 193.0], [1.60280682E12, 190.0], [1.60280676E12, 644.0], [1.60280694E12, 560.0], [1.60280688E12, 167.0], [1.60280706E12, 397.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.602807E12, 323.0], [1.6028067E12, 446.0], [1.60280664E12, 170.0], [1.60280712E12, 193.0], [1.60280682E12, 190.0], [1.60280676E12, 644.0], [1.60280694E12, 560.0], [1.60280688E12, 167.0], [1.60280706E12, 397.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.602807E12, 812.0], [1.6028067E12, 771.0], [1.60280664E12, 558.0], [1.60280712E12, 334.0], [1.60280682E12, 456.5], [1.60280676E12, 817.0], [1.60280694E12, 804.0], [1.60280688E12, 501.0], [1.60280706E12, 671.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280712E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 206.0, "minX": 1.0, "maxY": 837.0, "series": [{"data": [[1.0, 837.0], [2.0, 675.0], [4.0, 300.5], [5.0, 206.0], [3.0, 326.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 205.0, "minX": 1.0, "maxY": 836.5, "series": [{"data": [[1.0, 836.5], [2.0, 674.0], [4.0, 300.5], [5.0, 205.0], [3.0, 326.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60280664E12, "maxY": 1.7166666666666666, "series": [{"data": [[1.602807E12, 1.2333333333333334], [1.6028067E12, 1.15], [1.60280664E12, 1.4333333333333333], [1.60280712E12, 1.15], [1.60280682E12, 1.7], [1.60280676E12, 1.1833333333333333], [1.60280694E12, 1.1666666666666667], [1.60280688E12, 1.7166666666666666], [1.60280706E12, 1.5166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280712E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60280664E12, "maxY": 1.7166666666666666, "series": [{"data": [[1.602807E12, 1.2333333333333334], [1.6028067E12, 1.15], [1.60280664E12, 1.4166666666666667], [1.60280712E12, 1.1666666666666667], [1.60280682E12, 1.7], [1.60280676E12, 1.1833333333333333], [1.60280694E12, 1.1666666666666667], [1.60280688E12, 1.7166666666666666], [1.60280706E12, 1.5166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280712E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60280664E12, "maxY": 1.7166666666666666, "series": [{"data": [[1.602807E12, 1.2333333333333334], [1.6028067E12, 1.15], [1.60280664E12, 1.4166666666666667], [1.60280712E12, 1.1666666666666667], [1.60280682E12, 1.7], [1.60280676E12, 1.1833333333333333], [1.60280694E12, 1.1666666666666667], [1.60280688E12, 1.7166666666666666], [1.60280706E12, 1.5166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280712E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.60280664E12, "maxY": 1.7166666666666666, "series": [{"data": [[1.602807E12, 1.2333333333333334], [1.6028067E12, 1.15], [1.60280664E12, 1.4166666666666667], [1.60280712E12, 1.1666666666666667], [1.60280682E12, 1.7], [1.60280676E12, 1.1833333333333333], [1.60280694E12, 1.1666666666666667], [1.60280688E12, 1.7166666666666666], [1.60280706E12, 1.5166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280712E12, "title": "Total Transactions Per Second"}},
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

