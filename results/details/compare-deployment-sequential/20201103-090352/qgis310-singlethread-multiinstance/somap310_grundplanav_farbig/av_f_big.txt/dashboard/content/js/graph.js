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
        data: {"result": {"minY": 174.0, "minX": 0.0, "maxY": 3731.0, "series": [{"data": [[0.0, 174.0], [0.1, 174.0], [0.2, 176.0], [0.3, 176.0], [0.4, 176.0], [0.5, 177.0], [0.6, 177.0], [0.7, 178.0], [0.8, 178.0], [0.9, 180.0], [1.0, 181.0], [1.1, 186.0], [1.2, 186.0], [1.3, 199.0], [1.4, 200.0], [1.5, 203.0], [1.6, 203.0], [1.7, 204.0], [1.8, 204.0], [1.9, 204.0], [2.0, 205.0], [2.1, 207.0], [2.2, 208.0], [2.3, 208.0], [2.4, 208.0], [2.5, 208.0], [2.6, 209.0], [2.7, 209.0], [2.8, 209.0], [2.9, 210.0], [3.0, 210.0], [3.1, 210.0], [3.2, 210.0], [3.3, 212.0], [3.4, 212.0], [3.5, 213.0], [3.6, 213.0], [3.7, 214.0], [3.8, 214.0], [3.9, 214.0], [4.0, 215.0], [4.1, 215.0], [4.2, 215.0], [4.3, 216.0], [4.4, 216.0], [4.5, 216.0], [4.6, 216.0], [4.7, 219.0], [4.8, 219.0], [4.9, 220.0], [5.0, 220.0], [5.1, 221.0], [5.2, 221.0], [5.3, 221.0], [5.4, 222.0], [5.5, 223.0], [5.6, 224.0], [5.7, 224.0], [5.8, 224.0], [5.9, 224.0], [6.0, 224.0], [6.1, 224.0], [6.2, 226.0], [6.3, 227.0], [6.4, 229.0], [6.5, 229.0], [6.6, 229.0], [6.7, 229.0], [6.8, 229.0], [6.9, 232.0], [7.0, 238.0], [7.1, 240.0], [7.2, 240.0], [7.3, 245.0], [7.4, 248.0], [7.5, 270.0], [7.6, 270.0], [7.7, 275.0], [7.8, 288.0], [7.9, 294.0], [8.0, 294.0], [8.1, 295.0], [8.2, 299.0], [8.3, 300.0], [8.4, 300.0], [8.5, 300.0], [8.6, 302.0], [8.7, 302.0], [8.8, 307.0], [8.9, 309.0], [9.0, 311.0], [9.1, 311.0], [9.2, 311.0], [9.3, 313.0], [9.4, 315.0], [9.5, 315.0], [9.6, 317.0], [9.7, 318.0], [9.8, 318.0], [9.9, 318.0], [10.0, 319.0], [10.1, 320.0], [10.2, 320.0], [10.3, 322.0], [10.4, 322.0], [10.5, 322.0], [10.6, 322.0], [10.7, 323.0], [10.8, 323.0], [10.9, 323.0], [11.0, 323.0], [11.1, 324.0], [11.2, 327.0], [11.3, 327.0], [11.4, 327.0], [11.5, 327.0], [11.6, 328.0], [11.7, 328.0], [11.8, 328.0], [11.9, 328.0], [12.0, 328.0], [12.1, 328.0], [12.2, 328.0], [12.3, 329.0], [12.4, 329.0], [12.5, 329.0], [12.6, 329.0], [12.7, 330.0], [12.8, 330.0], [12.9, 330.0], [13.0, 330.0], [13.1, 330.0], [13.2, 331.0], [13.3, 331.0], [13.4, 332.0], [13.5, 333.0], [13.6, 333.0], [13.7, 333.0], [13.8, 336.0], [13.9, 336.0], [14.0, 336.0], [14.1, 336.0], [14.2, 337.0], [14.3, 338.0], [14.4, 338.0], [14.5, 338.0], [14.6, 339.0], [14.7, 340.0], [14.8, 340.0], [14.9, 340.0], [15.0, 341.0], [15.1, 341.0], [15.2, 342.0], [15.3, 342.0], [15.4, 343.0], [15.5, 343.0], [15.6, 343.0], [15.7, 343.0], [15.8, 343.0], [15.9, 343.0], [16.0, 343.0], [16.1, 344.0], [16.2, 344.0], [16.3, 344.0], [16.4, 346.0], [16.5, 348.0], [16.6, 349.0], [16.7, 349.0], [16.8, 350.0], [16.9, 350.0], [17.0, 350.0], [17.1, 352.0], [17.2, 353.0], [17.3, 356.0], [17.4, 356.0], [17.5, 356.0], [17.6, 357.0], [17.7, 357.0], [17.8, 357.0], [17.9, 363.0], [18.0, 363.0], [18.1, 365.0], [18.2, 365.0], [18.3, 365.0], [18.4, 366.0], [18.5, 366.0], [18.6, 366.0], [18.7, 367.0], [18.8, 368.0], [18.9, 368.0], [19.0, 370.0], [19.1, 373.0], [19.2, 374.0], [19.3, 374.0], [19.4, 376.0], [19.5, 377.0], [19.6, 377.0], [19.7, 377.0], [19.8, 378.0], [19.9, 379.0], [20.0, 381.0], [20.1, 381.0], [20.2, 388.0], [20.3, 389.0], [20.4, 389.0], [20.5, 393.0], [20.6, 394.0], [20.7, 398.0], [20.8, 398.0], [20.9, 414.0], [21.0, 415.0], [21.1, 420.0], [21.2, 420.0], [21.3, 425.0], [21.4, 427.0], [21.5, 429.0], [21.6, 429.0], [21.7, 433.0], [21.8, 434.0], [21.9, 434.0], [22.0, 436.0], [22.1, 437.0], [22.2, 438.0], [22.3, 438.0], [22.4, 439.0], [22.5, 440.0], [22.6, 440.0], [22.7, 440.0], [22.8, 440.0], [22.9, 442.0], [23.0, 443.0], [23.1, 443.0], [23.2, 444.0], [23.3, 446.0], [23.4, 446.0], [23.5, 446.0], [23.6, 449.0], [23.7, 449.0], [23.8, 449.0], [23.9, 449.0], [24.0, 451.0], [24.1, 452.0], [24.2, 452.0], [24.3, 452.0], [24.4, 453.0], [24.5, 456.0], [24.6, 456.0], [24.7, 457.0], [24.8, 458.0], [24.9, 459.0], [25.0, 459.0], [25.1, 459.0], [25.2, 459.0], [25.3, 459.0], [25.4, 459.0], [25.5, 461.0], [25.6, 462.0], [25.7, 462.0], [25.8, 462.0], [25.9, 463.0], [26.0, 464.0], [26.1, 464.0], [26.2, 465.0], [26.3, 466.0], [26.4, 466.0], [26.5, 466.0], [26.6, 467.0], [26.7, 467.0], [26.8, 467.0], [26.9, 468.0], [27.0, 469.0], [27.1, 471.0], [27.2, 471.0], [27.3, 473.0], [27.4, 474.0], [27.5, 476.0], [27.6, 476.0], [27.7, 476.0], [27.8, 477.0], [27.9, 478.0], [28.0, 478.0], [28.1, 479.0], [28.2, 481.0], [28.3, 482.0], [28.4, 482.0], [28.5, 482.0], [28.6, 484.0], [28.7, 484.0], [28.8, 487.0], [28.9, 494.0], [29.0, 495.0], [29.1, 495.0], [29.2, 495.0], [29.3, 499.0], [29.4, 500.0], [29.5, 500.0], [29.6, 503.0], [29.7, 507.0], [29.8, 509.0], [29.9, 509.0], [30.0, 517.0], [30.1, 526.0], [30.2, 526.0], [30.3, 528.0], [30.4, 529.0], [30.5, 538.0], [30.6, 538.0], [30.7, 546.0], [30.8, 547.0], [30.9, 548.0], [31.0, 548.0], [31.1, 548.0], [31.2, 548.0], [31.3, 549.0], [31.4, 549.0], [31.5, 550.0], [31.6, 553.0], [31.7, 553.0], [31.8, 554.0], [31.9, 555.0], [32.0, 555.0], [32.1, 555.0], [32.2, 557.0], [32.3, 563.0], [32.4, 563.0], [32.5, 563.0], [32.6, 565.0], [32.7, 565.0], [32.8, 566.0], [32.9, 566.0], [33.0, 571.0], [33.1, 576.0], [33.2, 578.0], [33.3, 578.0], [33.4, 579.0], [33.5, 579.0], [33.6, 579.0], [33.7, 583.0], [33.8, 583.0], [33.9, 583.0], [34.0, 583.0], [34.1, 584.0], [34.2, 585.0], [34.3, 587.0], [34.4, 587.0], [34.5, 592.0], [34.6, 597.0], [34.7, 597.0], [34.8, 597.0], [34.9, 598.0], [35.0, 598.0], [35.1, 598.0], [35.2, 604.0], [35.3, 623.0], [35.4, 624.0], [35.5, 624.0], [35.6, 631.0], [35.7, 634.0], [35.8, 639.0], [35.9, 639.0], [36.0, 647.0], [36.1, 666.0], [36.2, 670.0], [36.3, 670.0], [36.4, 674.0], [36.5, 677.0], [36.6, 678.0], [36.7, 678.0], [36.8, 685.0], [36.9, 685.0], [37.0, 685.0], [37.1, 686.0], [37.2, 687.0], [37.3, 689.0], [37.4, 689.0], [37.5, 691.0], [37.6, 692.0], [37.7, 692.0], [37.8, 692.0], [37.9, 693.0], [38.0, 693.0], [38.1, 693.0], [38.2, 693.0], [38.3, 694.0], [38.4, 695.0], [38.5, 695.0], [38.6, 696.0], [38.7, 697.0], [38.8, 699.0], [38.9, 699.0], [39.0, 700.0], [39.1, 702.0], [39.2, 703.0], [39.3, 703.0], [39.4, 705.0], [39.5, 705.0], [39.6, 706.0], [39.7, 706.0], [39.8, 706.0], [39.9, 707.0], [40.0, 707.0], [40.1, 707.0], [40.2, 707.0], [40.3, 708.0], [40.4, 708.0], [40.5, 708.0], [40.6, 710.0], [40.7, 711.0], [40.8, 711.0], [40.9, 711.0], [41.0, 711.0], [41.1, 712.0], [41.2, 712.0], [41.3, 714.0], [41.4, 714.0], [41.5, 714.0], [41.6, 714.0], [41.7, 714.0], [41.8, 714.0], [41.9, 714.0], [42.0, 714.0], [42.1, 715.0], [42.2, 715.0], [42.3, 715.0], [42.4, 716.0], [42.5, 716.0], [42.6, 716.0], [42.7, 716.0], [42.8, 716.0], [42.9, 717.0], [43.0, 717.0], [43.1, 717.0], [43.2, 717.0], [43.3, 718.0], [43.4, 718.0], [43.5, 718.0], [43.6, 719.0], [43.7, 720.0], [43.8, 720.0], [43.9, 720.0], [44.0, 722.0], [44.1, 723.0], [44.2, 723.0], [44.3, 724.0], [44.4, 724.0], [44.5, 724.0], [44.6, 724.0], [44.7, 725.0], [44.8, 726.0], [44.9, 726.0], [45.0, 726.0], [45.1, 726.0], [45.2, 726.0], [45.3, 726.0], [45.4, 726.0], [45.5, 726.0], [45.6, 726.0], [45.7, 726.0], [45.8, 727.0], [45.9, 727.0], [46.0, 728.0], [46.1, 728.0], [46.2, 729.0], [46.3, 729.0], [46.4, 729.0], [46.5, 729.0], [46.6, 729.0], [46.7, 730.0], [46.8, 730.0], [46.9, 731.0], [47.0, 731.0], [47.1, 731.0], [47.2, 731.0], [47.3, 731.0], [47.4, 732.0], [47.5, 732.0], [47.6, 732.0], [47.7, 732.0], [47.8, 732.0], [47.9, 733.0], [48.0, 733.0], [48.1, 734.0], [48.2, 734.0], [48.3, 734.0], [48.4, 734.0], [48.5, 735.0], [48.6, 735.0], [48.7, 735.0], [48.8, 735.0], [48.9, 735.0], [49.0, 736.0], [49.1, 736.0], [49.2, 736.0], [49.3, 736.0], [49.4, 737.0], [49.5, 737.0], [49.6, 737.0], [49.7, 738.0], [49.8, 738.0], [49.9, 738.0], [50.0, 738.0], [50.1, 740.0], [50.2, 740.0], [50.3, 740.0], [50.4, 740.0], [50.5, 741.0], [50.6, 741.0], [50.7, 741.0], [50.8, 741.0], [50.9, 741.0], [51.0, 741.0], [51.1, 742.0], [51.2, 744.0], [51.3, 744.0], [51.4, 744.0], [51.5, 747.0], [51.6, 747.0], [51.7, 747.0], [51.8, 748.0], [51.9, 749.0], [52.0, 749.0], [52.1, 749.0], [52.2, 750.0], [52.3, 750.0], [52.4, 751.0], [52.5, 751.0], [52.6, 751.0], [52.7, 752.0], [52.8, 752.0], [52.9, 752.0], [53.0, 752.0], [53.1, 752.0], [53.2, 752.0], [53.3, 752.0], [53.4, 752.0], [53.5, 754.0], [53.6, 754.0], [53.7, 755.0], [53.8, 756.0], [53.9, 757.0], [54.0, 757.0], [54.1, 757.0], [54.2, 758.0], [54.3, 758.0], [54.4, 758.0], [54.5, 759.0], [54.6, 759.0], [54.7, 761.0], [54.8, 761.0], [54.9, 762.0], [55.0, 763.0], [55.1, 763.0], [55.2, 764.0], [55.3, 764.0], [55.4, 765.0], [55.5, 765.0], [55.6, 767.0], [55.7, 768.0], [55.8, 768.0], [55.9, 768.0], [56.0, 771.0], [56.1, 771.0], [56.2, 772.0], [56.3, 772.0], [56.4, 773.0], [56.5, 774.0], [56.6, 775.0], [56.7, 775.0], [56.8, 775.0], [56.9, 777.0], [57.0, 777.0], [57.1, 778.0], [57.2, 781.0], [57.3, 782.0], [57.4, 782.0], [57.5, 782.0], [57.6, 783.0], [57.7, 784.0], [57.8, 784.0], [57.9, 784.0], [58.0, 785.0], [58.1, 785.0], [58.2, 785.0], [58.3, 785.0], [58.4, 785.0], [58.5, 785.0], [58.6, 786.0], [58.7, 786.0], [58.8, 787.0], [58.9, 787.0], [59.0, 787.0], [59.1, 793.0], [59.2, 793.0], [59.3, 793.0], [59.4, 795.0], [59.5, 796.0], [59.6, 797.0], [59.7, 797.0], [59.8, 798.0], [59.9, 800.0], [60.0, 801.0], [60.1, 801.0], [60.2, 802.0], [60.3, 802.0], [60.4, 802.0], [60.5, 803.0], [60.6, 803.0], [60.7, 804.0], [60.8, 804.0], [60.9, 804.0], [61.0, 804.0], [61.1, 805.0], [61.2, 805.0], [61.3, 805.0], [61.4, 807.0], [61.5, 809.0], [61.6, 809.0], [61.7, 810.0], [61.8, 810.0], [61.9, 810.0], [62.0, 811.0], [62.1, 813.0], [62.2, 817.0], [62.3, 817.0], [62.4, 819.0], [62.5, 820.0], [62.6, 825.0], [62.7, 825.0], [62.8, 826.0], [62.9, 828.0], [63.0, 828.0], [63.1, 828.0], [63.2, 829.0], [63.3, 831.0], [63.4, 831.0], [63.5, 832.0], [63.6, 833.0], [63.7, 834.0], [63.8, 834.0], [63.9, 835.0], [64.0, 840.0], [64.1, 840.0], [64.2, 840.0], [64.3, 841.0], [64.4, 843.0], [64.5, 843.0], [64.6, 843.0], [64.7, 844.0], [64.8, 851.0], [64.9, 857.0], [65.0, 857.0], [65.1, 857.0], [65.2, 862.0], [65.3, 862.0], [65.4, 862.0], [65.5, 865.0], [65.6, 866.0], [65.7, 866.0], [65.8, 866.0], [65.9, 866.0], [66.0, 867.0], [66.1, 867.0], [66.2, 869.0], [66.3, 869.0], [66.4, 869.0], [66.5, 869.0], [66.6, 869.0], [66.7, 870.0], [66.8, 870.0], [66.9, 871.0], [67.0, 872.0], [67.1, 872.0], [67.2, 872.0], [67.3, 872.0], [67.4, 873.0], [67.5, 875.0], [67.6, 875.0], [67.7, 876.0], [67.8, 876.0], [67.9, 876.0], [68.0, 876.0], [68.1, 876.0], [68.2, 877.0], [68.3, 877.0], [68.4, 877.0], [68.5, 877.0], [68.6, 878.0], [68.7, 878.0], [68.8, 879.0], [68.9, 880.0], [69.0, 880.0], [69.1, 880.0], [69.2, 880.0], [69.3, 880.0], [69.4, 881.0], [69.5, 881.0], [69.6, 882.0], [69.7, 883.0], [69.8, 883.0], [69.9, 883.0], [70.0, 884.0], [70.1, 886.0], [70.2, 886.0], [70.3, 886.0], [70.4, 887.0], [70.5, 887.0], [70.6, 887.0], [70.7, 888.0], [70.8, 891.0], [70.9, 893.0], [71.0, 893.0], [71.1, 893.0], [71.2, 893.0], [71.3, 893.0], [71.4, 893.0], [71.5, 894.0], [71.6, 895.0], [71.7, 895.0], [71.8, 896.0], [71.9, 896.0], [72.0, 896.0], [72.1, 896.0], [72.2, 897.0], [72.3, 898.0], [72.4, 899.0], [72.5, 899.0], [72.6, 899.0], [72.7, 900.0], [72.8, 900.0], [72.9, 900.0], [73.0, 900.0], [73.1, 901.0], [73.2, 901.0], [73.3, 901.0], [73.4, 902.0], [73.5, 904.0], [73.6, 904.0], [73.7, 904.0], [73.8, 907.0], [73.9, 907.0], [74.0, 907.0], [74.1, 909.0], [74.2, 909.0], [74.3, 910.0], [74.4, 910.0], [74.5, 910.0], [74.6, 912.0], [74.7, 913.0], [74.8, 913.0], [74.9, 913.0], [75.0, 913.0], [75.1, 913.0], [75.2, 914.0], [75.3, 914.0], [75.4, 915.0], [75.5, 915.0], [75.6, 917.0], [75.7, 918.0], [75.8, 919.0], [75.9, 919.0], [76.0, 920.0], [76.1, 920.0], [76.2, 921.0], [76.3, 921.0], [76.4, 921.0], [76.5, 924.0], [76.6, 925.0], [76.7, 925.0], [76.8, 928.0], [76.9, 928.0], [77.0, 928.0], [77.1, 931.0], [77.2, 932.0], [77.3, 933.0], [77.4, 933.0], [77.5, 934.0], [77.6, 934.0], [77.7, 934.0], [77.8, 934.0], [77.9, 935.0], [78.0, 938.0], [78.1, 939.0], [78.2, 939.0], [78.3, 940.0], [78.4, 941.0], [78.5, 941.0], [78.6, 943.0], [78.7, 946.0], [78.8, 946.0], [78.9, 946.0], [79.0, 950.0], [79.1, 950.0], [79.2, 954.0], [79.3, 954.0], [79.4, 955.0], [79.5, 956.0], [79.6, 962.0], [79.7, 962.0], [79.8, 962.0], [79.9, 964.0], [80.0, 967.0], [80.1, 967.0], [80.2, 968.0], [80.3, 969.0], [80.4, 969.0], [80.5, 970.0], [80.6, 971.0], [80.7, 973.0], [80.8, 973.0], [80.9, 975.0], [81.0, 976.0], [81.1, 982.0], [81.2, 982.0], [81.3, 983.0], [81.4, 983.0], [81.5, 984.0], [81.6, 984.0], [81.7, 986.0], [81.8, 987.0], [81.9, 987.0], [82.0, 994.0], [82.1, 995.0], [82.2, 997.0], [82.3, 997.0], [82.4, 997.0], [82.5, 998.0], [82.6, 999.0], [82.7, 999.0], [82.8, 999.0], [82.9, 1000.0], [83.0, 1000.0], [83.1, 1000.0], [83.2, 1004.0], [83.3, 1004.0], [83.4, 1004.0], [83.5, 1006.0], [83.6, 1009.0], [83.7, 1009.0], [83.8, 1009.0], [83.9, 1010.0], [84.0, 1011.0], [84.1, 1014.0], [84.2, 1014.0], [84.3, 1016.0], [84.4, 1017.0], [84.5, 1018.0], [84.6, 1018.0], [84.7, 1020.0], [84.8, 1021.0], [84.9, 1022.0], [85.0, 1022.0], [85.1, 1024.0], [85.2, 1028.0], [85.3, 1028.0], [85.4, 1030.0], [85.5, 1031.0], [85.6, 1031.0], [85.7, 1031.0], [85.8, 1032.0], [85.9, 1032.0], [86.0, 1032.0], [86.1, 1032.0], [86.2, 1034.0], [86.3, 1035.0], [86.4, 1035.0], [86.5, 1035.0], [86.6, 1038.0], [86.7, 1038.0], [86.8, 1038.0], [86.9, 1039.0], [87.0, 1042.0], [87.1, 1046.0], [87.2, 1046.0], [87.3, 1046.0], [87.4, 1048.0], [87.5, 1051.0], [87.6, 1051.0], [87.7, 1051.0], [87.8, 1052.0], [87.9, 1055.0], [88.0, 1055.0], [88.1, 1057.0], [88.2, 1057.0], [88.3, 1058.0], [88.4, 1058.0], [88.5, 1059.0], [88.6, 1059.0], [88.7, 1059.0], [88.8, 1061.0], [88.9, 1061.0], [89.0, 1062.0], [89.1, 1062.0], [89.2, 1064.0], [89.3, 1066.0], [89.4, 1067.0], [89.5, 1067.0], [89.6, 1067.0], [89.7, 1068.0], [89.8, 1069.0], [89.9, 1069.0], [90.0, 1069.0], [90.1, 1079.0], [90.2, 1079.0], [90.3, 1079.0], [90.4, 1083.0], [90.5, 1086.0], [90.6, 1086.0], [90.7, 1089.0], [90.8, 1090.0], [90.9, 1092.0], [91.0, 1092.0], [91.1, 1093.0], [91.2, 1095.0], [91.3, 1098.0], [91.4, 1098.0], [91.5, 1103.0], [91.6, 1103.0], [91.7, 1103.0], [91.8, 1104.0], [91.9, 1105.0], [92.0, 1106.0], [92.1, 1106.0], [92.2, 1106.0], [92.3, 1113.0], [92.4, 1115.0], [92.5, 1115.0], [92.6, 1116.0], [92.7, 1126.0], [92.8, 1130.0], [92.9, 1130.0], [93.0, 1132.0], [93.1, 1133.0], [93.2, 1133.0], [93.3, 1133.0], [93.4, 1138.0], [93.5, 1151.0], [93.6, 1151.0], [93.7, 1168.0], [93.8, 1181.0], [93.9, 1195.0], [94.0, 1195.0], [94.1, 1205.0], [94.2, 1217.0], [94.3, 1219.0], [94.4, 1219.0], [94.5, 1224.0], [94.6, 1250.0], [94.7, 1251.0], [94.8, 1251.0], [94.9, 1262.0], [95.0, 1263.0], [95.1, 1263.0], [95.2, 1285.0], [95.3, 1290.0], [95.4, 1290.0], [95.5, 1290.0], [95.6, 1292.0], [95.7, 1302.0], [95.8, 1323.0], [95.9, 1323.0], [96.0, 1343.0], [96.1, 1344.0], [96.2, 1345.0], [96.3, 1345.0], [96.4, 1367.0], [96.5, 1368.0], [96.6, 1369.0], [96.7, 1369.0], [96.8, 1369.0], [96.9, 1379.0], [97.0, 1379.0], [97.1, 1400.0], [97.2, 1424.0], [97.3, 1426.0], [97.4, 1426.0], [97.5, 1430.0], [97.6, 1536.0], [97.7, 1566.0], [97.8, 1566.0], [97.9, 1584.0], [98.0, 1597.0], [98.1, 1599.0], [98.2, 1599.0], [98.3, 1674.0], [98.4, 1746.0], [98.5, 1746.0], [98.6, 1808.0], [98.7, 1898.0], [98.8, 1992.0], [98.9, 1992.0], [99.0, 2065.0], [99.1, 2104.0], [99.2, 2412.0], [99.3, 2412.0], [99.4, 3033.0], [99.5, 3256.0], [99.6, 3265.0], [99.7, 3265.0], [99.8, 3501.0], [99.9, 3731.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 154.0, "series": [{"data": [[600.0, 28.0], [700.0, 154.0], [800.0, 94.0], [900.0, 75.0], [1000.0, 63.0], [1100.0, 19.0], [1200.0, 12.0], [1300.0, 10.0], [1400.0, 4.0], [1500.0, 5.0], [100.0, 10.0], [1600.0, 1.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 1.0], [2100.0, 1.0], [2400.0, 1.0], [3000.0, 1.0], [200.0, 51.0], [3200.0, 2.0], [3500.0, 1.0], [3700.0, 1.0], [300.0, 92.0], [400.0, 63.0], [500.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [[0.0, 217.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 500.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60439424E12, "maxY": 1.0, "series": [{"data": [[1.60439442E12, 1.0], [1.60439472E12, 1.0], [1.60439424E12, 1.0], [1.6043943E12, 1.0], [1.6043946E12, 1.0], [1.60439478E12, 1.0], [1.60439466E12, 1.0], [1.60439448E12, 1.0], [1.60439454E12, 1.0], [1.60439436E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439478E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 739.1945578231293, "minX": 1.0, "maxY": 739.1945578231293, "series": [{"data": [[1.0, 739.1945578231293]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 739.1945578231293]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 235.45, "minX": 1.60439424E12, "maxY": 263485.88333333336, "series": [{"data": [[1.60439442E12, 161693.33333333334], [1.60439472E12, 142942.26666666666], [1.60439424E12, 132031.78333333333], [1.6043943E12, 263485.88333333336], [1.6043946E12, 166195.53333333333], [1.60439478E12, 190863.75], [1.60439466E12, 167227.66666666666], [1.60439448E12, 202172.68333333332], [1.60439454E12, 254099.15], [1.60439436E12, 155060.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60439442E12, 521.4833333333333], [1.60439472E12, 634.1], [1.60439424E12, 235.45], [1.6043943E12, 559.9333333333333], [1.6043946E12, 515.0166666666667], [1.60439478E12, 544.9333333333333], [1.60439466E12, 529.8833333333333], [1.60439448E12, 787.2], [1.60439454E12, 680.95], [1.60439436E12, 514.0833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439478E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 563.1509433962264, "minX": 1.60439424E12, "maxY": 892.1323529411764, "series": [{"data": [[1.60439442E12, 866.333333333333], [1.60439472E12, 715.7738095238096], [1.60439424E12, 686.7419354838709], [1.6043943E12, 800.4189189189191], [1.6043946E12, 874.4558823529413], [1.60439478E12, 583.8513513513515], [1.60439466E12, 859.0999999999998], [1.60439448E12, 563.1509433962264], [1.60439454E12, 656.2857142857144], [1.60439436E12, 892.1323529411764]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439478E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 562.1320754716983, "minX": 1.60439424E12, "maxY": 890.8088235294119, "series": [{"data": [[1.60439442E12, 864.8260869565216], [1.60439472E12, 714.9761904761904], [1.60439424E12, 685.2580645161291], [1.6043943E12, 799.0135135135138], [1.6043946E12, 873.3823529411765], [1.60439478E12, 582.6756756756758], [1.60439466E12, 857.9857142857143], [1.60439448E12, 562.1320754716983], [1.60439454E12, 655.1208791208792], [1.60439436E12, 890.8088235294119]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439478E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.018867924528301886, "minX": 1.60439424E12, "maxY": 1.258064516129032, "series": [{"data": [[1.60439442E12, 0.043478260869565216], [1.60439472E12, 0.02380952380952381], [1.60439424E12, 1.258064516129032], [1.6043943E12, 0.04054054054054054], [1.6043946E12, 0.029411764705882356], [1.60439478E12, 0.02702702702702703], [1.60439466E12, 0.028571428571428574], [1.60439448E12, 0.018867924528301886], [1.60439454E12, 0.021978021978021983], [1.60439436E12, 0.029411764705882353]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439478E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 174.0, "minX": 1.60439424E12, "maxY": 3731.0, "series": [{"data": [[1.60439442E12, 1262.0], [1.60439472E12, 1133.0], [1.60439424E12, 3265.0], [1.6043943E12, 3501.0], [1.6043946E12, 1369.0], [1.60439478E12, 2104.0], [1.60439466E12, 1181.0], [1.60439448E12, 3731.0], [1.60439454E12, 3256.0], [1.60439436E12, 3033.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60439442E12, 689.0], [1.60439472E12, 427.0], [1.60439424E12, 209.0], [1.6043943E12, 199.0], [1.6043946E12, 549.0], [1.60439478E12, 178.0], [1.60439466E12, 328.0], [1.60439448E12, 174.0], [1.60439454E12, 200.0], [1.60439436E12, 500.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60439442E12, 689.0], [1.60439472E12, 427.0], [1.60439424E12, 209.0], [1.6043943E12, 199.0], [1.6043946E12, 549.0], [1.60439478E12, 178.0], [1.60439466E12, 328.0], [1.60439448E12, 174.11860002040862], [1.60439454E12, 200.0], [1.60439436E12, 500.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60439442E12, 689.0], [1.60439472E12, 427.0], [1.60439424E12, 209.0], [1.6043943E12, 199.0], [1.6043946E12, 549.0], [1.60439478E12, 178.0], [1.60439466E12, 328.0], [1.60439448E12, 174.0329999744892], [1.60439454E12, 200.0], [1.60439436E12, 500.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60439442E12, 689.0], [1.60439472E12, 427.0], [1.60439424E12, 209.0], [1.6043943E12, 199.0], [1.6043946E12, 549.0], [1.60439478E12, 178.0], [1.60439466E12, 328.0], [1.60439448E12, 174.0], [1.60439454E12, 200.0], [1.60439436E12, 500.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60439442E12, 871.0], [1.60439472E12, 735.0], [1.60439424E12, 583.0], [1.6043943E12, 733.0], [1.6043946E12, 831.5], [1.60439478E12, 354.5], [1.60439466E12, 865.5], [1.60439448E12, 436.5], [1.60439454E12, 583.0], [1.60439436E12, 819.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439478E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 186.0, "minX": 1.0, "maxY": 893.0, "series": [{"data": [[1.0, 893.0], [2.0, 695.5], [4.0, 297.5], [5.0, 186.0], [3.0, 342.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 186.0, "minX": 1.0, "maxY": 892.0, "series": [{"data": [[1.0, 892.0], [2.0, 694.0], [4.0, 297.5], [5.0, 186.0], [3.0, 342.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60439424E12, "maxY": 1.7666666666666666, "series": [{"data": [[1.60439442E12, 1.15], [1.60439472E12, 1.4], [1.60439424E12, 0.5333333333333333], [1.6043943E12, 1.2333333333333334], [1.6043946E12, 1.1333333333333333], [1.60439478E12, 1.2166666666666666], [1.60439466E12, 1.1666666666666667], [1.60439448E12, 1.7666666666666666], [1.60439454E12, 1.5166666666666666], [1.60439436E12, 1.1333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439478E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60439424E12, "maxY": 1.7666666666666666, "series": [{"data": [[1.60439442E12, 1.15], [1.60439472E12, 1.4], [1.60439424E12, 0.5166666666666667], [1.6043943E12, 1.2333333333333334], [1.6043946E12, 1.1333333333333333], [1.60439478E12, 1.2333333333333334], [1.60439466E12, 1.1666666666666667], [1.60439448E12, 1.7666666666666666], [1.60439454E12, 1.5166666666666666], [1.60439436E12, 1.1333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60439478E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60439424E12, "maxY": 1.7666666666666666, "series": [{"data": [[1.60439442E12, 1.15], [1.60439472E12, 1.4], [1.60439424E12, 0.5166666666666667], [1.6043943E12, 1.2333333333333334], [1.6043946E12, 1.1333333333333333], [1.60439478E12, 1.2333333333333334], [1.60439466E12, 1.1666666666666667], [1.60439448E12, 1.7666666666666666], [1.60439454E12, 1.5166666666666666], [1.60439436E12, 1.1333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439478E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.60439424E12, "maxY": 1.7666666666666666, "series": [{"data": [[1.60439442E12, 1.15], [1.60439472E12, 1.4], [1.60439424E12, 0.5166666666666667], [1.6043943E12, 1.2333333333333334], [1.6043946E12, 1.1333333333333333], [1.60439478E12, 1.2333333333333334], [1.60439466E12, 1.1666666666666667], [1.60439448E12, 1.7666666666666666], [1.60439454E12, 1.5166666666666666], [1.60439436E12, 1.1333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60439478E12, "title": "Total Transactions Per Second"}},
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

