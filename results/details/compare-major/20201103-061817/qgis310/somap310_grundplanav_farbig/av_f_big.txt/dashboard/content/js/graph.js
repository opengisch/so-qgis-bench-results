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
        data: {"result": {"minY": 190.0, "minX": 0.0, "maxY": 3525.0, "series": [{"data": [[0.0, 190.0], [0.1, 190.0], [0.2, 200.0], [0.3, 202.0], [0.4, 202.0], [0.5, 219.0], [0.6, 220.0], [0.7, 222.0], [0.8, 222.0], [0.9, 223.0], [1.0, 224.0], [1.1, 227.0], [1.2, 227.0], [1.3, 227.0], [1.4, 228.0], [1.5, 231.0], [1.6, 231.0], [1.7, 233.0], [1.8, 234.0], [1.9, 234.0], [2.0, 234.0], [2.1, 236.0], [2.2, 241.0], [2.3, 241.0], [2.4, 242.0], [2.5, 244.0], [2.6, 248.0], [2.7, 248.0], [2.8, 250.0], [2.9, 250.0], [3.0, 252.0], [3.1, 252.0], [3.2, 253.0], [3.3, 256.0], [3.4, 256.0], [3.5, 259.0], [3.6, 266.0], [3.7, 268.0], [3.8, 268.0], [3.9, 268.0], [4.0, 270.0], [4.1, 270.0], [4.2, 270.0], [4.3, 270.0], [4.4, 271.0], [4.5, 272.0], [4.6, 272.0], [4.7, 273.0], [4.8, 274.0], [4.9, 277.0], [5.0, 277.0], [5.1, 277.0], [5.2, 277.0], [5.3, 277.0], [5.4, 278.0], [5.5, 280.0], [5.6, 283.0], [5.7, 283.0], [5.8, 284.0], [5.9, 285.0], [6.0, 285.0], [6.1, 285.0], [6.2, 287.0], [6.3, 288.0], [6.4, 288.0], [6.5, 288.0], [6.6, 290.0], [6.7, 297.0], [6.8, 297.0], [6.9, 299.0], [7.0, 301.0], [7.1, 308.0], [7.2, 308.0], [7.3, 308.0], [7.4, 309.0], [7.5, 310.0], [7.6, 310.0], [7.7, 311.0], [7.8, 311.0], [7.9, 312.0], [8.0, 312.0], [8.1, 312.0], [8.2, 320.0], [8.3, 321.0], [8.4, 321.0], [8.5, 323.0], [8.6, 325.0], [8.7, 325.0], [8.8, 325.0], [8.9, 326.0], [9.0, 327.0], [9.1, 327.0], [9.2, 328.0], [9.3, 328.0], [9.4, 330.0], [9.5, 330.0], [9.6, 330.0], [9.7, 331.0], [9.8, 334.0], [9.9, 334.0], [10.0, 334.0], [10.1, 335.0], [10.2, 335.0], [10.3, 337.0], [10.4, 339.0], [10.5, 340.0], [10.6, 340.0], [10.7, 348.0], [10.8, 349.0], [10.9, 350.0], [11.0, 350.0], [11.1, 352.0], [11.2, 355.0], [11.3, 358.0], [11.4, 358.0], [11.5, 358.0], [11.6, 361.0], [11.7, 361.0], [11.8, 362.0], [11.9, 362.0], [12.0, 362.0], [12.1, 362.0], [12.2, 363.0], [12.3, 363.0], [12.4, 365.0], [12.5, 365.0], [12.6, 365.0], [12.7, 370.0], [12.8, 371.0], [12.9, 371.0], [13.0, 373.0], [13.1, 374.0], [13.2, 375.0], [13.3, 375.0], [13.4, 375.0], [13.5, 375.0], [13.6, 375.0], [13.7, 377.0], [13.8, 378.0], [13.9, 379.0], [14.0, 379.0], [14.1, 379.0], [14.2, 379.0], [14.3, 380.0], [14.4, 380.0], [14.5, 380.0], [14.6, 381.0], [14.7, 385.0], [14.8, 385.0], [14.9, 385.0], [15.0, 387.0], [15.1, 387.0], [15.2, 387.0], [15.3, 387.0], [15.4, 389.0], [15.5, 389.0], [15.6, 389.0], [15.7, 389.0], [15.8, 390.0], [15.9, 390.0], [16.0, 392.0], [16.1, 393.0], [16.2, 393.0], [16.3, 393.0], [16.4, 394.0], [16.5, 400.0], [16.6, 402.0], [16.7, 402.0], [16.8, 402.0], [16.9, 402.0], [17.0, 402.0], [17.1, 406.0], [17.2, 408.0], [17.3, 409.0], [17.4, 409.0], [17.5, 410.0], [17.6, 411.0], [17.7, 412.0], [17.8, 412.0], [17.9, 413.0], [18.0, 415.0], [18.1, 416.0], [18.2, 416.0], [18.3, 417.0], [18.4, 418.0], [18.5, 418.0], [18.6, 422.0], [18.7, 422.0], [18.8, 423.0], [18.9, 423.0], [19.0, 423.0], [19.1, 425.0], [19.2, 426.0], [19.3, 426.0], [19.4, 427.0], [19.5, 427.0], [19.6, 428.0], [19.7, 428.0], [19.8, 429.0], [19.9, 429.0], [20.0, 430.0], [20.1, 430.0], [20.2, 430.0], [20.3, 432.0], [20.4, 432.0], [20.5, 433.0], [20.6, 434.0], [20.7, 435.0], [20.8, 435.0], [20.9, 436.0], [21.0, 436.0], [21.1, 437.0], [21.2, 437.0], [21.3, 438.0], [21.4, 439.0], [21.5, 441.0], [21.6, 441.0], [21.7, 441.0], [21.8, 442.0], [21.9, 442.0], [22.0, 444.0], [22.1, 444.0], [22.2, 445.0], [22.3, 445.0], [22.4, 448.0], [22.5, 448.0], [22.6, 449.0], [22.7, 449.0], [22.8, 449.0], [22.9, 451.0], [23.0, 451.0], [23.1, 451.0], [23.2, 451.0], [23.3, 456.0], [23.4, 456.0], [23.5, 456.0], [23.6, 457.0], [23.7, 457.0], [23.8, 457.0], [23.9, 458.0], [24.0, 459.0], [24.1, 459.0], [24.2, 459.0], [24.3, 461.0], [24.4, 463.0], [24.5, 464.0], [24.6, 464.0], [24.7, 464.0], [24.8, 465.0], [24.9, 465.0], [25.0, 465.0], [25.1, 466.0], [25.2, 469.0], [25.3, 469.0], [25.4, 471.0], [25.5, 473.0], [25.6, 474.0], [25.7, 474.0], [25.8, 476.0], [25.9, 476.0], [26.0, 477.0], [26.1, 477.0], [26.2, 478.0], [26.3, 478.0], [26.4, 479.0], [26.5, 479.0], [26.6, 479.0], [26.7, 479.0], [26.8, 479.0], [26.9, 480.0], [27.0, 483.0], [27.1, 483.0], [27.2, 483.0], [27.3, 484.0], [27.4, 485.0], [27.5, 487.0], [27.6, 487.0], [27.7, 487.0], [27.8, 488.0], [27.9, 490.0], [28.0, 490.0], [28.1, 491.0], [28.2, 492.0], [28.3, 493.0], [28.4, 493.0], [28.5, 494.0], [28.6, 495.0], [28.7, 495.0], [28.8, 497.0], [28.9, 497.0], [29.0, 500.0], [29.1, 500.0], [29.2, 501.0], [29.3, 502.0], [29.4, 504.0], [29.5, 504.0], [29.6, 507.0], [29.7, 507.0], [29.8, 507.0], [29.9, 507.0], [30.0, 510.0], [30.1, 513.0], [30.2, 513.0], [30.3, 514.0], [30.4, 515.0], [30.5, 516.0], [30.6, 516.0], [30.7, 516.0], [30.8, 519.0], [30.9, 519.0], [31.0, 519.0], [31.1, 519.0], [31.2, 521.0], [31.3, 525.0], [31.4, 525.0], [31.5, 526.0], [31.6, 526.0], [31.7, 526.0], [31.8, 526.0], [31.9, 527.0], [32.0, 528.0], [32.1, 528.0], [32.2, 530.0], [32.3, 530.0], [32.4, 531.0], [32.5, 531.0], [32.6, 532.0], [32.7, 533.0], [32.8, 533.0], [32.9, 533.0], [33.0, 534.0], [33.1, 534.0], [33.2, 534.0], [33.3, 534.0], [33.4, 534.0], [33.5, 534.0], [33.6, 534.0], [33.7, 537.0], [33.8, 537.0], [33.9, 539.0], [34.0, 539.0], [34.1, 541.0], [34.2, 541.0], [34.3, 543.0], [34.4, 543.0], [34.5, 543.0], [34.6, 547.0], [34.7, 547.0], [34.8, 547.0], [34.9, 549.0], [35.0, 551.0], [35.1, 551.0], [35.2, 553.0], [35.3, 555.0], [35.4, 557.0], [35.5, 557.0], [35.6, 560.0], [35.7, 560.0], [35.8, 562.0], [35.9, 562.0], [36.0, 562.0], [36.1, 564.0], [36.2, 564.0], [36.3, 564.0], [36.4, 564.0], [36.5, 565.0], [36.6, 565.0], [36.7, 565.0], [36.8, 567.0], [36.9, 568.0], [37.0, 568.0], [37.1, 568.0], [37.2, 568.0], [37.3, 575.0], [37.4, 575.0], [37.5, 577.0], [37.6, 583.0], [37.7, 583.0], [37.8, 583.0], [37.9, 583.0], [38.0, 583.0], [38.1, 587.0], [38.2, 587.0], [38.3, 588.0], [38.4, 589.0], [38.5, 589.0], [38.6, 591.0], [38.7, 598.0], [38.8, 602.0], [38.9, 602.0], [39.0, 604.0], [39.1, 605.0], [39.2, 608.0], [39.3, 608.0], [39.4, 609.0], [39.5, 610.0], [39.6, 614.0], [39.7, 614.0], [39.8, 618.0], [39.9, 618.0], [40.0, 621.0], [40.1, 621.0], [40.2, 621.0], [40.3, 624.0], [40.4, 624.0], [40.5, 624.0], [40.6, 625.0], [40.7, 628.0], [40.8, 628.0], [40.9, 629.0], [41.0, 630.0], [41.1, 632.0], [41.2, 632.0], [41.3, 633.0], [41.4, 634.0], [41.5, 634.0], [41.6, 634.0], [41.7, 634.0], [41.8, 636.0], [41.9, 636.0], [42.0, 636.0], [42.1, 636.0], [42.2, 637.0], [42.3, 637.0], [42.4, 637.0], [42.5, 637.0], [42.6, 640.0], [42.7, 640.0], [42.8, 641.0], [42.9, 642.0], [43.0, 643.0], [43.1, 643.0], [43.2, 644.0], [43.3, 647.0], [43.4, 647.0], [43.5, 648.0], [43.6, 648.0], [43.7, 649.0], [43.8, 649.0], [43.9, 650.0], [44.0, 651.0], [44.1, 654.0], [44.2, 654.0], [44.3, 655.0], [44.4, 656.0], [44.5, 657.0], [44.6, 657.0], [44.7, 657.0], [44.8, 658.0], [44.9, 659.0], [45.0, 659.0], [45.1, 660.0], [45.2, 660.0], [45.3, 660.0], [45.4, 662.0], [45.5, 662.0], [45.6, 663.0], [45.7, 663.0], [45.8, 664.0], [45.9, 666.0], [46.0, 670.0], [46.1, 670.0], [46.2, 670.0], [46.3, 677.0], [46.4, 678.0], [46.5, 678.0], [46.6, 679.0], [46.7, 679.0], [46.8, 679.0], [46.9, 680.0], [47.0, 681.0], [47.1, 681.0], [47.2, 681.0], [47.3, 681.0], [47.4, 683.0], [47.5, 684.0], [47.6, 684.0], [47.7, 686.0], [47.8, 687.0], [47.9, 688.0], [48.0, 688.0], [48.1, 690.0], [48.2, 692.0], [48.3, 693.0], [48.4, 693.0], [48.5, 693.0], [48.6, 693.0], [48.7, 693.0], [48.8, 694.0], [48.9, 696.0], [49.0, 698.0], [49.1, 698.0], [49.2, 699.0], [49.3, 701.0], [49.4, 702.0], [49.5, 702.0], [49.6, 703.0], [49.7, 704.0], [49.8, 704.0], [49.9, 704.0], [50.0, 705.0], [50.1, 705.0], [50.2, 705.0], [50.3, 707.0], [50.4, 707.0], [50.5, 707.0], [50.6, 707.0], [50.7, 708.0], [50.8, 709.0], [50.9, 709.0], [51.0, 709.0], [51.1, 711.0], [51.2, 712.0], [51.3, 712.0], [51.4, 712.0], [51.5, 712.0], [51.6, 715.0], [51.7, 715.0], [51.8, 717.0], [51.9, 717.0], [52.0, 718.0], [52.1, 718.0], [52.2, 718.0], [52.3, 718.0], [52.4, 719.0], [52.5, 719.0], [52.6, 720.0], [52.7, 721.0], [52.8, 721.0], [52.9, 721.0], [53.0, 725.0], [53.1, 728.0], [53.2, 728.0], [53.3, 728.0], [53.4, 730.0], [53.5, 731.0], [53.6, 731.0], [53.7, 732.0], [53.8, 735.0], [53.9, 735.0], [54.0, 735.0], [54.1, 738.0], [54.2, 739.0], [54.3, 739.0], [54.4, 739.0], [54.5, 740.0], [54.6, 740.0], [54.7, 741.0], [54.8, 741.0], [54.9, 742.0], [55.0, 745.0], [55.1, 745.0], [55.2, 746.0], [55.3, 747.0], [55.4, 750.0], [55.5, 750.0], [55.6, 751.0], [55.7, 753.0], [55.8, 754.0], [55.9, 754.0], [56.0, 755.0], [56.1, 758.0], [56.2, 759.0], [56.3, 759.0], [56.4, 759.0], [56.5, 760.0], [56.6, 761.0], [56.7, 761.0], [56.8, 762.0], [56.9, 762.0], [57.0, 762.0], [57.1, 763.0], [57.2, 765.0], [57.3, 765.0], [57.4, 765.0], [57.5, 766.0], [57.6, 767.0], [57.7, 768.0], [57.8, 768.0], [57.9, 772.0], [58.0, 773.0], [58.1, 773.0], [58.2, 773.0], [58.3, 775.0], [58.4, 776.0], [58.5, 776.0], [58.6, 777.0], [58.7, 779.0], [58.8, 779.0], [58.9, 779.0], [59.0, 779.0], [59.1, 780.0], [59.2, 781.0], [59.3, 781.0], [59.4, 782.0], [59.5, 782.0], [59.6, 782.0], [59.7, 782.0], [59.8, 783.0], [59.9, 785.0], [60.0, 785.0], [60.1, 785.0], [60.2, 786.0], [60.3, 792.0], [60.4, 792.0], [60.5, 793.0], [60.6, 794.0], [60.7, 795.0], [60.8, 795.0], [60.9, 796.0], [61.0, 796.0], [61.1, 798.0], [61.2, 798.0], [61.3, 800.0], [61.4, 801.0], [61.5, 802.0], [61.6, 802.0], [61.7, 803.0], [61.8, 804.0], [61.9, 804.0], [62.0, 804.0], [62.1, 806.0], [62.2, 807.0], [62.3, 807.0], [62.4, 808.0], [62.5, 808.0], [62.6, 809.0], [62.7, 809.0], [62.8, 810.0], [62.9, 810.0], [63.0, 811.0], [63.1, 811.0], [63.2, 813.0], [63.3, 818.0], [63.4, 818.0], [63.5, 821.0], [63.6, 822.0], [63.7, 823.0], [63.8, 823.0], [63.9, 823.0], [64.0, 824.0], [64.1, 827.0], [64.2, 827.0], [64.3, 827.0], [64.4, 827.0], [64.5, 828.0], [64.6, 828.0], [64.7, 828.0], [64.8, 829.0], [64.9, 829.0], [65.0, 829.0], [65.1, 830.0], [65.2, 831.0], [65.3, 831.0], [65.4, 832.0], [65.5, 833.0], [65.6, 833.0], [65.7, 833.0], [65.8, 834.0], [65.9, 835.0], [66.0, 836.0], [66.1, 836.0], [66.2, 843.0], [66.3, 844.0], [66.4, 845.0], [66.5, 845.0], [66.6, 846.0], [66.7, 847.0], [66.8, 847.0], [66.9, 847.0], [67.0, 849.0], [67.1, 853.0], [67.2, 853.0], [67.3, 854.0], [67.4, 855.0], [67.5, 856.0], [67.6, 856.0], [67.7, 858.0], [67.8, 861.0], [67.9, 863.0], [68.0, 863.0], [68.1, 863.0], [68.2, 863.0], [68.3, 863.0], [68.4, 863.0], [68.5, 865.0], [68.6, 869.0], [68.7, 869.0], [68.8, 869.0], [68.9, 869.0], [69.0, 869.0], [69.1, 869.0], [69.2, 870.0], [69.3, 871.0], [69.4, 874.0], [69.5, 874.0], [69.6, 876.0], [69.7, 879.0], [69.8, 882.0], [69.9, 882.0], [70.0, 882.0], [70.1, 884.0], [70.2, 884.0], [70.3, 885.0], [70.4, 885.0], [70.5, 886.0], [70.6, 886.0], [70.7, 886.0], [70.8, 888.0], [70.9, 889.0], [71.0, 889.0], [71.1, 889.0], [71.2, 890.0], [71.3, 890.0], [71.4, 890.0], [71.5, 891.0], [71.6, 892.0], [71.7, 892.0], [71.8, 892.0], [71.9, 894.0], [72.0, 900.0], [72.1, 900.0], [72.2, 900.0], [72.3, 902.0], [72.4, 903.0], [72.5, 903.0], [72.6, 904.0], [72.7, 904.0], [72.8, 904.0], [72.9, 904.0], [73.0, 905.0], [73.1, 907.0], [73.2, 910.0], [73.3, 910.0], [73.4, 910.0], [73.5, 910.0], [73.6, 910.0], [73.7, 912.0], [73.8, 914.0], [73.9, 915.0], [74.0, 915.0], [74.1, 916.0], [74.2, 919.0], [74.3, 919.0], [74.4, 919.0], [74.5, 920.0], [74.6, 920.0], [74.7, 920.0], [74.8, 920.0], [74.9, 921.0], [75.0, 922.0], [75.1, 922.0], [75.2, 923.0], [75.3, 927.0], [75.4, 928.0], [75.5, 928.0], [75.6, 933.0], [75.7, 933.0], [75.8, 934.0], [75.9, 934.0], [76.0, 934.0], [76.1, 936.0], [76.2, 937.0], [76.3, 937.0], [76.4, 937.0], [76.5, 938.0], [76.6, 938.0], [76.7, 938.0], [76.8, 939.0], [76.9, 940.0], [77.0, 940.0], [77.1, 941.0], [77.2, 943.0], [77.3, 943.0], [77.4, 943.0], [77.5, 945.0], [77.6, 956.0], [77.7, 957.0], [77.8, 957.0], [77.9, 961.0], [78.0, 962.0], [78.1, 964.0], [78.2, 964.0], [78.3, 964.0], [78.4, 965.0], [78.5, 965.0], [78.6, 969.0], [78.7, 970.0], [78.8, 970.0], [78.9, 970.0], [79.0, 971.0], [79.1, 975.0], [79.2, 976.0], [79.3, 976.0], [79.4, 979.0], [79.5, 980.0], [79.6, 981.0], [79.7, 981.0], [79.8, 982.0], [79.9, 982.0], [80.0, 983.0], [80.1, 983.0], [80.2, 985.0], [80.3, 988.0], [80.4, 988.0], [80.5, 992.0], [80.6, 994.0], [80.7, 994.0], [80.8, 994.0], [80.9, 995.0], [81.0, 996.0], [81.1, 997.0], [81.2, 997.0], [81.3, 1000.0], [81.4, 1002.0], [81.5, 1002.0], [81.6, 1002.0], [81.7, 1002.0], [81.8, 1002.0], [81.9, 1002.0], [82.0, 1003.0], [82.1, 1005.0], [82.2, 1007.0], [82.3, 1007.0], [82.4, 1010.0], [82.5, 1011.0], [82.6, 1015.0], [82.7, 1015.0], [82.8, 1015.0], [82.9, 1019.0], [83.0, 1030.0], [83.1, 1030.0], [83.2, 1033.0], [83.3, 1035.0], [83.4, 1035.0], [83.5, 1038.0], [83.6, 1041.0], [83.7, 1045.0], [83.8, 1045.0], [83.9, 1048.0], [84.0, 1052.0], [84.1, 1055.0], [84.2, 1055.0], [84.3, 1055.0], [84.4, 1055.0], [84.5, 1060.0], [84.6, 1060.0], [84.7, 1060.0], [84.8, 1062.0], [84.9, 1065.0], [85.0, 1065.0], [85.1, 1066.0], [85.2, 1068.0], [85.3, 1068.0], [85.4, 1070.0], [85.5, 1070.0], [85.6, 1073.0], [85.7, 1073.0], [85.8, 1074.0], [85.9, 1078.0], [86.0, 1083.0], [86.1, 1083.0], [86.2, 1092.0], [86.3, 1098.0], [86.4, 1098.0], [86.5, 1098.0], [86.6, 1098.0], [86.7, 1100.0], [86.8, 1100.0], [86.9, 1101.0], [87.0, 1103.0], [87.1, 1114.0], [87.2, 1114.0], [87.3, 1114.0], [87.4, 1114.0], [87.5, 1115.0], [87.6, 1115.0], [87.7, 1120.0], [87.8, 1120.0], [87.9, 1121.0], [88.0, 1121.0], [88.1, 1125.0], [88.2, 1126.0], [88.3, 1138.0], [88.4, 1138.0], [88.5, 1138.0], [88.6, 1139.0], [88.7, 1139.0], [88.8, 1140.0], [88.9, 1141.0], [89.0, 1141.0], [89.1, 1141.0], [89.2, 1142.0], [89.3, 1147.0], [89.4, 1156.0], [89.5, 1156.0], [89.6, 1157.0], [89.7, 1159.0], [89.8, 1160.0], [89.9, 1160.0], [90.0, 1161.0], [90.1, 1166.0], [90.2, 1166.0], [90.3, 1167.0], [90.4, 1168.0], [90.5, 1168.0], [90.6, 1168.0], [90.7, 1171.0], [90.8, 1172.0], [90.9, 1175.0], [91.0, 1175.0], [91.1, 1176.0], [91.2, 1178.0], [91.3, 1178.0], [91.4, 1178.0], [91.5, 1180.0], [91.6, 1197.0], [91.7, 1197.0], [91.8, 1201.0], [91.9, 1202.0], [92.0, 1205.0], [92.1, 1205.0], [92.2, 1208.0], [92.3, 1215.0], [92.4, 1217.0], [92.5, 1217.0], [92.6, 1221.0], [92.7, 1226.0], [92.8, 1236.0], [92.9, 1236.0], [93.0, 1240.0], [93.1, 1242.0], [93.2, 1247.0], [93.3, 1247.0], [93.4, 1265.0], [93.5, 1271.0], [93.6, 1271.0], [93.7, 1284.0], [93.8, 1288.0], [93.9, 1288.0], [94.0, 1288.0], [94.1, 1291.0], [94.2, 1294.0], [94.3, 1296.0], [94.4, 1296.0], [94.5, 1298.0], [94.6, 1301.0], [94.7, 1336.0], [94.8, 1336.0], [94.9, 1338.0], [95.0, 1348.0], [95.1, 1348.0], [95.2, 1364.0], [95.3, 1365.0], [95.4, 1368.0], [95.5, 1368.0], [95.6, 1371.0], [95.7, 1375.0], [95.8, 1375.0], [95.9, 1375.0], [96.0, 1381.0], [96.1, 1392.0], [96.2, 1393.0], [96.3, 1393.0], [96.4, 1437.0], [96.5, 1441.0], [96.6, 1446.0], [96.7, 1446.0], [96.8, 1452.0], [96.9, 1456.0], [97.0, 1456.0], [97.1, 1461.0], [97.2, 1479.0], [97.3, 1497.0], [97.4, 1497.0], [97.5, 1515.0], [97.6, 1523.0], [97.7, 1524.0], [97.8, 1524.0], [97.9, 1603.0], [98.0, 1603.0], [98.1, 1606.0], [98.2, 1606.0], [98.3, 1613.0], [98.4, 1616.0], [98.5, 1616.0], [98.6, 1620.0], [98.7, 1635.0], [98.8, 1676.0], [98.9, 1676.0], [99.0, 1768.0], [99.1, 1845.0], [99.2, 1937.0], [99.3, 1937.0], [99.4, 2006.0], [99.5, 2019.0], [99.6, 2147.0], [99.7, 2147.0], [99.8, 3498.0], [99.9, 3525.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 92.0, "series": [{"data": [[2100.0, 1.0], [600.0, 77.0], [700.0, 88.0], [200.0, 50.0], [800.0, 79.0], [3400.0, 1.0], [3500.0, 1.0], [900.0, 68.0], [1000.0, 40.0], [1100.0, 37.0], [1200.0, 21.0], [300.0, 70.0], [1300.0, 13.0], [1400.0, 8.0], [1500.0, 3.0], [400.0, 92.0], [1600.0, 8.0], [100.0, 1.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 1.0], [500.0, 72.0], [2000.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 19.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 502.0, "series": [{"data": [[0.0, 214.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 502.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 19.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.53684210526316, "minX": 1.6043853E12, "maxY": 9.989062499999992, "series": [{"data": [[1.60438536E12, 9.53684210526316], [1.6043853E12, 9.989062499999992]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438536E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 236.0, "minX": 1.0, "maxY": 1156.0, "series": [{"data": [[8.0, 236.0], [4.0, 390.0], [2.0, 1156.0], [1.0, 692.0], [9.0, 843.0], [5.0, 334.0], [10.0, 739.5897790055241], [6.0, 449.0], [3.0, 339.0], [7.0, 426.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.930612244897953, 736.7414965986397]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 703.45, "minX": 1.6043853E12, "maxY": 1619523.9333333333, "series": [{"data": [[1.60438536E12, 216261.43333333332], [1.6043853E12, 1619523.9333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438536E12, 703.45], [1.6043853E12, 4819.583333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438536E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 616.6210526315789, "minX": 1.6043853E12, "maxY": 754.5718749999999, "series": [{"data": [[1.60438536E12, 616.6210526315789], [1.6043853E12, 754.5718749999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438536E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 614.8947368421053, "minX": 1.6043853E12, "maxY": 753.0312500000007, "series": [{"data": [[1.60438536E12, 614.8947368421053], [1.6043853E12, 753.0312500000007]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438536E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6043853E12, "maxY": 0.14374999999999993, "series": [{"data": [[1.60438536E12, 0.0], [1.6043853E12, 0.14374999999999993]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438536E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 190.0, "minX": 1.6043853E12, "maxY": 3525.0, "series": [{"data": [[1.60438536E12, 2147.0], [1.6043853E12, 3525.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438536E12, 224.0], [1.6043853E12, 221.53799969434738]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438536E12, 224.0], [1.6043853E12, 222.34590006113052]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438536E12, 224.0], [1.6043853E12, 222.08949992358686]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438536E12, 224.0], [1.6043853E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438536E12, 449.0], [1.6043853E12, 730.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438536E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 285.0, "minX": 5.0, "maxY": 930.0, "series": [{"data": [[9.0, 930.0], [10.0, 799.5], [11.0, 843.5], [12.0, 778.5], [13.0, 833.0], [14.0, 687.5], [15.0, 483.0], [16.0, 485.5], [17.0, 497.5], [18.0, 477.5], [19.0, 541.0], [5.0, 285.0], [20.0, 553.0], [23.0, 337.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 285.0, "minX": 5.0, "maxY": 929.0, "series": [{"data": [[9.0, 929.0], [10.0, 798.5], [11.0, 842.5], [12.0, 778.0], [13.0, 832.0], [14.0, 686.5], [15.0, 482.0], [16.0, 485.0], [17.0, 494.0], [18.0, 476.5], [19.0, 541.0], [5.0, 285.0], [20.0, 550.5], [23.0, 335.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.6043853E12, "maxY": 10.833333333333334, "series": [{"data": [[1.60438536E12, 1.4166666666666667], [1.6043853E12, 10.833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438536E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5833333333333333, "minX": 1.6043853E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60438536E12, 1.5833333333333333], [1.6043853E12, 10.666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438536E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5833333333333333, "minX": 1.6043853E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60438536E12, 1.5833333333333333], [1.6043853E12, 10.666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438536E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5833333333333333, "minX": 1.6043853E12, "maxY": 10.666666666666666, "series": [{"data": [[1.60438536E12, 1.5833333333333333], [1.6043853E12, 10.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438536E12, "title": "Total Transactions Per Second"}},
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

