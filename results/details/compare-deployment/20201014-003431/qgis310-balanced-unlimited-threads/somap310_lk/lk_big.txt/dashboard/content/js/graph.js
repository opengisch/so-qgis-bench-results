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
        data: {"result": {"minY": 37.0, "minX": 0.0, "maxY": 5005.0, "series": [{"data": [[0.0, 37.0], [0.1, 66.0], [0.2, 77.0], [0.3, 92.0], [0.4, 113.0], [0.5, 115.0], [0.6, 117.0], [0.7, 118.0], [0.8, 121.0], [0.9, 123.0], [1.0, 126.0], [1.1, 127.0], [1.2, 129.0], [1.3, 131.0], [1.4, 132.0], [1.5, 133.0], [1.6, 135.0], [1.7, 137.0], [1.8, 138.0], [1.9, 138.0], [2.0, 139.0], [2.1, 140.0], [2.2, 140.0], [2.3, 141.0], [2.4, 142.0], [2.5, 142.0], [2.6, 142.0], [2.7, 143.0], [2.8, 143.0], [2.9, 143.0], [3.0, 144.0], [3.1, 144.0], [3.2, 144.0], [3.3, 144.0], [3.4, 145.0], [3.5, 145.0], [3.6, 145.0], [3.7, 146.0], [3.8, 146.0], [3.9, 147.0], [4.0, 147.0], [4.1, 147.0], [4.2, 148.0], [4.3, 148.0], [4.4, 148.0], [4.5, 148.0], [4.6, 149.0], [4.7, 149.0], [4.8, 149.0], [4.9, 149.0], [5.0, 149.0], [5.1, 150.0], [5.2, 150.0], [5.3, 150.0], [5.4, 150.0], [5.5, 150.0], [5.6, 150.0], [5.7, 151.0], [5.8, 151.0], [5.9, 151.0], [6.0, 151.0], [6.1, 151.0], [6.2, 151.0], [6.3, 151.0], [6.4, 152.0], [6.5, 152.0], [6.6, 152.0], [6.7, 152.0], [6.8, 152.0], [6.9, 152.0], [7.0, 153.0], [7.1, 153.0], [7.2, 153.0], [7.3, 153.0], [7.4, 153.0], [7.5, 153.0], [7.6, 153.0], [7.7, 154.0], [7.8, 154.0], [7.9, 154.0], [8.0, 154.0], [8.1, 154.0], [8.2, 155.0], [8.3, 155.0], [8.4, 155.0], [8.5, 155.0], [8.6, 155.0], [8.7, 155.0], [8.8, 155.0], [8.9, 156.0], [9.0, 156.0], [9.1, 156.0], [9.2, 156.0], [9.3, 156.0], [9.4, 157.0], [9.5, 157.0], [9.6, 157.0], [9.7, 157.0], [9.8, 157.0], [9.9, 157.0], [10.0, 157.0], [10.1, 157.0], [10.2, 158.0], [10.3, 158.0], [10.4, 158.0], [10.5, 158.0], [10.6, 158.0], [10.7, 159.0], [10.8, 159.0], [10.9, 159.0], [11.0, 159.0], [11.1, 159.0], [11.2, 159.0], [11.3, 159.0], [11.4, 160.0], [11.5, 160.0], [11.6, 160.0], [11.7, 160.0], [11.8, 160.0], [11.9, 160.0], [12.0, 160.0], [12.1, 160.0], [12.2, 160.0], [12.3, 161.0], [12.4, 161.0], [12.5, 161.0], [12.6, 161.0], [12.7, 161.0], [12.8, 162.0], [12.9, 162.0], [13.0, 162.0], [13.1, 162.0], [13.2, 162.0], [13.3, 162.0], [13.4, 162.0], [13.5, 163.0], [13.6, 163.0], [13.7, 163.0], [13.8, 163.0], [13.9, 163.0], [14.0, 163.0], [14.1, 163.0], [14.2, 164.0], [14.3, 164.0], [14.4, 164.0], [14.5, 164.0], [14.6, 164.0], [14.7, 164.0], [14.8, 164.0], [14.9, 165.0], [15.0, 165.0], [15.1, 165.0], [15.2, 165.0], [15.3, 166.0], [15.4, 166.0], [15.5, 166.0], [15.6, 166.0], [15.7, 166.0], [15.8, 166.0], [15.9, 167.0], [16.0, 167.0], [16.1, 167.0], [16.2, 168.0], [16.3, 168.0], [16.4, 168.0], [16.5, 168.0], [16.6, 169.0], [16.7, 169.0], [16.8, 169.0], [16.9, 169.0], [17.0, 170.0], [17.1, 170.0], [17.2, 170.0], [17.3, 170.0], [17.4, 170.0], [17.5, 171.0], [17.6, 171.0], [17.7, 171.0], [17.8, 171.0], [17.9, 172.0], [18.0, 172.0], [18.1, 172.0], [18.2, 173.0], [18.3, 173.0], [18.4, 174.0], [18.5, 174.0], [18.6, 174.0], [18.7, 174.0], [18.8, 175.0], [18.9, 175.0], [19.0, 175.0], [19.1, 176.0], [19.2, 176.0], [19.3, 177.0], [19.4, 177.0], [19.5, 177.0], [19.6, 178.0], [19.7, 178.0], [19.8, 179.0], [19.9, 180.0], [20.0, 180.0], [20.1, 181.0], [20.2, 181.0], [20.3, 181.0], [20.4, 182.0], [20.5, 184.0], [20.6, 184.0], [20.7, 185.0], [20.8, 185.0], [20.9, 186.0], [21.0, 187.0], [21.1, 188.0], [21.2, 189.0], [21.3, 190.0], [21.4, 192.0], [21.5, 193.0], [21.6, 194.0], [21.7, 196.0], [21.8, 197.0], [21.9, 199.0], [22.0, 199.0], [22.1, 200.0], [22.2, 201.0], [22.3, 201.0], [22.4, 202.0], [22.5, 203.0], [22.6, 204.0], [22.7, 206.0], [22.8, 207.0], [22.9, 208.0], [23.0, 209.0], [23.1, 212.0], [23.2, 213.0], [23.3, 216.0], [23.4, 218.0], [23.5, 219.0], [23.6, 220.0], [23.7, 220.0], [23.8, 222.0], [23.9, 224.0], [24.0, 225.0], [24.1, 226.0], [24.2, 227.0], [24.3, 229.0], [24.4, 230.0], [24.5, 231.0], [24.6, 231.0], [24.7, 232.0], [24.8, 233.0], [24.9, 234.0], [25.0, 235.0], [25.1, 235.0], [25.2, 236.0], [25.3, 237.0], [25.4, 237.0], [25.5, 237.0], [25.6, 238.0], [25.7, 239.0], [25.8, 240.0], [25.9, 240.0], [26.0, 242.0], [26.1, 243.0], [26.2, 243.0], [26.3, 244.0], [26.4, 244.0], [26.5, 245.0], [26.6, 245.0], [26.7, 246.0], [26.8, 246.0], [26.9, 246.0], [27.0, 247.0], [27.1, 249.0], [27.2, 249.0], [27.3, 250.0], [27.4, 251.0], [27.5, 252.0], [27.6, 252.0], [27.7, 253.0], [27.8, 253.0], [27.9, 254.0], [28.0, 254.0], [28.1, 255.0], [28.2, 255.0], [28.3, 256.0], [28.4, 256.0], [28.5, 257.0], [28.6, 258.0], [28.7, 258.0], [28.8, 258.0], [28.9, 259.0], [29.0, 260.0], [29.1, 260.0], [29.2, 261.0], [29.3, 261.0], [29.4, 262.0], [29.5, 263.0], [29.6, 263.0], [29.7, 263.0], [29.8, 264.0], [29.9, 264.0], [30.0, 265.0], [30.1, 265.0], [30.2, 266.0], [30.3, 267.0], [30.4, 267.0], [30.5, 268.0], [30.6, 268.0], [30.7, 268.0], [30.8, 269.0], [30.9, 270.0], [31.0, 271.0], [31.1, 271.0], [31.2, 272.0], [31.3, 273.0], [31.4, 274.0], [31.5, 275.0], [31.6, 276.0], [31.7, 277.0], [31.8, 278.0], [31.9, 279.0], [32.0, 280.0], [32.1, 282.0], [32.2, 284.0], [32.3, 285.0], [32.4, 286.0], [32.5, 287.0], [32.6, 288.0], [32.7, 289.0], [32.8, 290.0], [32.9, 292.0], [33.0, 292.0], [33.1, 293.0], [33.2, 294.0], [33.3, 295.0], [33.4, 296.0], [33.5, 297.0], [33.6, 298.0], [33.7, 299.0], [33.8, 300.0], [33.9, 302.0], [34.0, 303.0], [34.1, 303.0], [34.2, 304.0], [34.3, 305.0], [34.4, 306.0], [34.5, 307.0], [34.6, 310.0], [34.7, 311.0], [34.8, 312.0], [34.9, 313.0], [35.0, 316.0], [35.1, 318.0], [35.2, 321.0], [35.3, 322.0], [35.4, 323.0], [35.5, 325.0], [35.6, 325.0], [35.7, 326.0], [35.8, 327.0], [35.9, 328.0], [36.0, 329.0], [36.1, 330.0], [36.2, 331.0], [36.3, 333.0], [36.4, 334.0], [36.5, 335.0], [36.6, 337.0], [36.7, 339.0], [36.8, 340.0], [36.9, 341.0], [37.0, 343.0], [37.1, 344.0], [37.2, 346.0], [37.3, 346.0], [37.4, 348.0], [37.5, 351.0], [37.6, 352.0], [37.7, 354.0], [37.8, 355.0], [37.9, 356.0], [38.0, 358.0], [38.1, 359.0], [38.2, 360.0], [38.3, 361.0], [38.4, 362.0], [38.5, 363.0], [38.6, 364.0], [38.7, 367.0], [38.8, 369.0], [38.9, 369.0], [39.0, 371.0], [39.1, 373.0], [39.2, 375.0], [39.3, 377.0], [39.4, 378.0], [39.5, 379.0], [39.6, 380.0], [39.7, 382.0], [39.8, 385.0], [39.9, 385.0], [40.0, 388.0], [40.1, 390.0], [40.2, 391.0], [40.3, 393.0], [40.4, 394.0], [40.5, 396.0], [40.6, 397.0], [40.7, 400.0], [40.8, 401.0], [40.9, 403.0], [41.0, 404.0], [41.1, 405.0], [41.2, 406.0], [41.3, 408.0], [41.4, 409.0], [41.5, 410.0], [41.6, 411.0], [41.7, 412.0], [41.8, 415.0], [41.9, 416.0], [42.0, 418.0], [42.1, 420.0], [42.2, 421.0], [42.3, 422.0], [42.4, 423.0], [42.5, 424.0], [42.6, 425.0], [42.7, 426.0], [42.8, 427.0], [42.9, 429.0], [43.0, 430.0], [43.1, 432.0], [43.2, 434.0], [43.3, 435.0], [43.4, 436.0], [43.5, 439.0], [43.6, 441.0], [43.7, 443.0], [43.8, 445.0], [43.9, 447.0], [44.0, 448.0], [44.1, 451.0], [44.2, 452.0], [44.3, 454.0], [44.4, 455.0], [44.5, 457.0], [44.6, 459.0], [44.7, 460.0], [44.8, 461.0], [44.9, 462.0], [45.0, 463.0], [45.1, 464.0], [45.2, 465.0], [45.3, 466.0], [45.4, 466.0], [45.5, 467.0], [45.6, 468.0], [45.7, 469.0], [45.8, 471.0], [45.9, 472.0], [46.0, 475.0], [46.1, 475.0], [46.2, 476.0], [46.3, 479.0], [46.4, 480.0], [46.5, 482.0], [46.6, 483.0], [46.7, 484.0], [46.8, 487.0], [46.9, 488.0], [47.0, 490.0], [47.1, 491.0], [47.2, 494.0], [47.3, 496.0], [47.4, 501.0], [47.5, 502.0], [47.6, 503.0], [47.7, 504.0], [47.8, 508.0], [47.9, 509.0], [48.0, 509.0], [48.1, 511.0], [48.2, 512.0], [48.3, 514.0], [48.4, 515.0], [48.5, 516.0], [48.6, 518.0], [48.7, 518.0], [48.8, 520.0], [48.9, 522.0], [49.0, 524.0], [49.1, 524.0], [49.2, 526.0], [49.3, 528.0], [49.4, 530.0], [49.5, 531.0], [49.6, 532.0], [49.7, 532.0], [49.8, 534.0], [49.9, 535.0], [50.0, 538.0], [50.1, 540.0], [50.2, 540.0], [50.3, 542.0], [50.4, 544.0], [50.5, 545.0], [50.6, 547.0], [50.7, 549.0], [50.8, 551.0], [50.9, 553.0], [51.0, 554.0], [51.1, 555.0], [51.2, 556.0], [51.3, 558.0], [51.4, 560.0], [51.5, 561.0], [51.6, 562.0], [51.7, 563.0], [51.8, 565.0], [51.9, 565.0], [52.0, 566.0], [52.1, 567.0], [52.2, 568.0], [52.3, 570.0], [52.4, 571.0], [52.5, 572.0], [52.6, 572.0], [52.7, 574.0], [52.8, 576.0], [52.9, 576.0], [53.0, 577.0], [53.1, 579.0], [53.2, 581.0], [53.3, 582.0], [53.4, 583.0], [53.5, 584.0], [53.6, 585.0], [53.7, 587.0], [53.8, 587.0], [53.9, 589.0], [54.0, 590.0], [54.1, 592.0], [54.2, 594.0], [54.3, 595.0], [54.4, 596.0], [54.5, 599.0], [54.6, 601.0], [54.7, 602.0], [54.8, 603.0], [54.9, 605.0], [55.0, 607.0], [55.1, 608.0], [55.2, 610.0], [55.3, 611.0], [55.4, 612.0], [55.5, 613.0], [55.6, 615.0], [55.7, 616.0], [55.8, 617.0], [55.9, 618.0], [56.0, 619.0], [56.1, 623.0], [56.2, 624.0], [56.3, 626.0], [56.4, 629.0], [56.5, 631.0], [56.6, 633.0], [56.7, 634.0], [56.8, 636.0], [56.9, 639.0], [57.0, 640.0], [57.1, 640.0], [57.2, 642.0], [57.3, 646.0], [57.4, 647.0], [57.5, 649.0], [57.6, 652.0], [57.7, 657.0], [57.8, 662.0], [57.9, 664.0], [58.0, 665.0], [58.1, 666.0], [58.2, 668.0], [58.3, 669.0], [58.4, 671.0], [58.5, 672.0], [58.6, 673.0], [58.7, 675.0], [58.8, 676.0], [58.9, 677.0], [59.0, 678.0], [59.1, 680.0], [59.2, 681.0], [59.3, 682.0], [59.4, 684.0], [59.5, 685.0], [59.6, 688.0], [59.7, 689.0], [59.8, 690.0], [59.9, 692.0], [60.0, 695.0], [60.1, 697.0], [60.2, 699.0], [60.3, 701.0], [60.4, 703.0], [60.5, 705.0], [60.6, 707.0], [60.7, 708.0], [60.8, 711.0], [60.9, 713.0], [61.0, 713.0], [61.1, 716.0], [61.2, 718.0], [61.3, 720.0], [61.4, 720.0], [61.5, 723.0], [61.6, 726.0], [61.7, 726.0], [61.8, 727.0], [61.9, 729.0], [62.0, 731.0], [62.1, 733.0], [62.2, 735.0], [62.3, 736.0], [62.4, 737.0], [62.5, 737.0], [62.6, 739.0], [62.7, 741.0], [62.8, 741.0], [62.9, 744.0], [63.0, 745.0], [63.1, 746.0], [63.2, 749.0], [63.3, 750.0], [63.4, 753.0], [63.5, 754.0], [63.6, 757.0], [63.7, 758.0], [63.8, 761.0], [63.9, 762.0], [64.0, 763.0], [64.1, 764.0], [64.2, 766.0], [64.3, 767.0], [64.4, 769.0], [64.5, 769.0], [64.6, 771.0], [64.7, 773.0], [64.8, 775.0], [64.9, 776.0], [65.0, 776.0], [65.1, 778.0], [65.2, 780.0], [65.3, 781.0], [65.4, 782.0], [65.5, 783.0], [65.6, 785.0], [65.7, 786.0], [65.8, 789.0], [65.9, 791.0], [66.0, 794.0], [66.1, 797.0], [66.2, 798.0], [66.3, 801.0], [66.4, 803.0], [66.5, 806.0], [66.6, 807.0], [66.7, 808.0], [66.8, 811.0], [66.9, 813.0], [67.0, 815.0], [67.1, 816.0], [67.2, 817.0], [67.3, 819.0], [67.4, 820.0], [67.5, 821.0], [67.6, 824.0], [67.7, 826.0], [67.8, 827.0], [67.9, 830.0], [68.0, 830.0], [68.1, 832.0], [68.2, 833.0], [68.3, 835.0], [68.4, 836.0], [68.5, 837.0], [68.6, 838.0], [68.7, 840.0], [68.8, 841.0], [68.9, 842.0], [69.0, 842.0], [69.1, 843.0], [69.2, 843.0], [69.3, 846.0], [69.4, 848.0], [69.5, 851.0], [69.6, 854.0], [69.7, 856.0], [69.8, 858.0], [69.9, 860.0], [70.0, 862.0], [70.1, 863.0], [70.2, 864.0], [70.3, 867.0], [70.4, 869.0], [70.5, 870.0], [70.6, 872.0], [70.7, 877.0], [70.8, 878.0], [70.9, 881.0], [71.0, 884.0], [71.1, 887.0], [71.2, 887.0], [71.3, 890.0], [71.4, 891.0], [71.5, 892.0], [71.6, 894.0], [71.7, 896.0], [71.8, 899.0], [71.9, 901.0], [72.0, 902.0], [72.1, 905.0], [72.2, 907.0], [72.3, 908.0], [72.4, 912.0], [72.5, 915.0], [72.6, 918.0], [72.7, 920.0], [72.8, 921.0], [72.9, 926.0], [73.0, 929.0], [73.1, 931.0], [73.2, 934.0], [73.3, 936.0], [73.4, 938.0], [73.5, 942.0], [73.6, 946.0], [73.7, 948.0], [73.8, 949.0], [73.9, 951.0], [74.0, 953.0], [74.1, 956.0], [74.2, 959.0], [74.3, 963.0], [74.4, 969.0], [74.5, 973.0], [74.6, 975.0], [74.7, 978.0], [74.8, 979.0], [74.9, 982.0], [75.0, 986.0], [75.1, 987.0], [75.2, 988.0], [75.3, 990.0], [75.4, 992.0], [75.5, 993.0], [75.6, 999.0], [75.7, 1003.0], [75.8, 1007.0], [75.9, 1009.0], [76.0, 1013.0], [76.1, 1016.0], [76.2, 1018.0], [76.3, 1023.0], [76.4, 1026.0], [76.5, 1030.0], [76.6, 1032.0], [76.7, 1035.0], [76.8, 1039.0], [76.9, 1041.0], [77.0, 1043.0], [77.1, 1046.0], [77.2, 1047.0], [77.3, 1049.0], [77.4, 1052.0], [77.5, 1055.0], [77.6, 1056.0], [77.7, 1057.0], [77.8, 1060.0], [77.9, 1061.0], [78.0, 1063.0], [78.1, 1065.0], [78.2, 1067.0], [78.3, 1071.0], [78.4, 1073.0], [78.5, 1077.0], [78.6, 1081.0], [78.7, 1083.0], [78.8, 1087.0], [78.9, 1088.0], [79.0, 1090.0], [79.1, 1093.0], [79.2, 1095.0], [79.3, 1096.0], [79.4, 1098.0], [79.5, 1101.0], [79.6, 1103.0], [79.7, 1104.0], [79.8, 1107.0], [79.9, 1109.0], [80.0, 1113.0], [80.1, 1114.0], [80.2, 1119.0], [80.3, 1121.0], [80.4, 1125.0], [80.5, 1129.0], [80.6, 1131.0], [80.7, 1134.0], [80.8, 1137.0], [80.9, 1139.0], [81.0, 1142.0], [81.1, 1146.0], [81.2, 1148.0], [81.3, 1152.0], [81.4, 1157.0], [81.5, 1158.0], [81.6, 1161.0], [81.7, 1162.0], [81.8, 1166.0], [81.9, 1168.0], [82.0, 1172.0], [82.1, 1174.0], [82.2, 1176.0], [82.3, 1179.0], [82.4, 1180.0], [82.5, 1184.0], [82.6, 1186.0], [82.7, 1188.0], [82.8, 1190.0], [82.9, 1193.0], [83.0, 1197.0], [83.1, 1200.0], [83.2, 1202.0], [83.3, 1205.0], [83.4, 1207.0], [83.5, 1211.0], [83.6, 1216.0], [83.7, 1222.0], [83.8, 1226.0], [83.9, 1228.0], [84.0, 1232.0], [84.1, 1236.0], [84.2, 1240.0], [84.3, 1241.0], [84.4, 1243.0], [84.5, 1248.0], [84.6, 1253.0], [84.7, 1255.0], [84.8, 1262.0], [84.9, 1265.0], [85.0, 1267.0], [85.1, 1273.0], [85.2, 1276.0], [85.3, 1282.0], [85.4, 1286.0], [85.5, 1293.0], [85.6, 1295.0], [85.7, 1301.0], [85.8, 1304.0], [85.9, 1308.0], [86.0, 1312.0], [86.1, 1316.0], [86.2, 1319.0], [86.3, 1322.0], [86.4, 1326.0], [86.5, 1331.0], [86.6, 1335.0], [86.7, 1340.0], [86.8, 1344.0], [86.9, 1347.0], [87.0, 1350.0], [87.1, 1356.0], [87.2, 1363.0], [87.3, 1368.0], [87.4, 1373.0], [87.5, 1377.0], [87.6, 1382.0], [87.7, 1388.0], [87.8, 1391.0], [87.9, 1395.0], [88.0, 1399.0], [88.1, 1403.0], [88.2, 1407.0], [88.3, 1409.0], [88.4, 1415.0], [88.5, 1418.0], [88.6, 1424.0], [88.7, 1430.0], [88.8, 1434.0], [88.9, 1435.0], [89.0, 1440.0], [89.1, 1449.0], [89.2, 1453.0], [89.3, 1459.0], [89.4, 1466.0], [89.5, 1471.0], [89.6, 1472.0], [89.7, 1478.0], [89.8, 1480.0], [89.9, 1483.0], [90.0, 1487.0], [90.1, 1491.0], [90.2, 1498.0], [90.3, 1505.0], [90.4, 1510.0], [90.5, 1514.0], [90.6, 1521.0], [90.7, 1524.0], [90.8, 1531.0], [90.9, 1536.0], [91.0, 1541.0], [91.1, 1546.0], [91.2, 1549.0], [91.3, 1558.0], [91.4, 1561.0], [91.5, 1569.0], [91.6, 1573.0], [91.7, 1578.0], [91.8, 1581.0], [91.9, 1585.0], [92.0, 1592.0], [92.1, 1597.0], [92.2, 1600.0], [92.3, 1609.0], [92.4, 1617.0], [92.5, 1620.0], [92.6, 1625.0], [92.7, 1630.0], [92.8, 1636.0], [92.9, 1655.0], [93.0, 1660.0], [93.1, 1674.0], [93.2, 1678.0], [93.3, 1692.0], [93.4, 1703.0], [93.5, 1715.0], [93.6, 1725.0], [93.7, 1729.0], [93.8, 1740.0], [93.9, 1750.0], [94.0, 1754.0], [94.1, 1759.0], [94.2, 1766.0], [94.3, 1780.0], [94.4, 1795.0], [94.5, 1805.0], [94.6, 1818.0], [94.7, 1832.0], [94.8, 1850.0], [94.9, 1864.0], [95.0, 1871.0], [95.1, 1890.0], [95.2, 1906.0], [95.3, 1915.0], [95.4, 1931.0], [95.5, 1937.0], [95.6, 1952.0], [95.7, 1958.0], [95.8, 1981.0], [95.9, 1987.0], [96.0, 1994.0], [96.1, 2012.0], [96.2, 2032.0], [96.3, 2049.0], [96.4, 2060.0], [96.5, 2087.0], [96.6, 2119.0], [96.7, 2126.0], [96.8, 2134.0], [96.9, 2158.0], [97.0, 2168.0], [97.1, 2197.0], [97.2, 2225.0], [97.3, 2237.0], [97.4, 2288.0], [97.5, 2322.0], [97.6, 2329.0], [97.7, 2349.0], [97.8, 2370.0], [97.9, 2380.0], [98.0, 2415.0], [98.1, 2451.0], [98.2, 2495.0], [98.3, 2527.0], [98.4, 2570.0], [98.5, 2611.0], [98.6, 2649.0], [98.7, 2679.0], [98.8, 2714.0], [98.9, 2762.0], [99.0, 2813.0], [99.1, 2964.0], [99.2, 3069.0], [99.3, 3148.0], [99.4, 3202.0], [99.5, 3349.0], [99.6, 3558.0], [99.7, 3984.0], [99.8, 4078.0], [99.9, 4219.0], [100.0, 5005.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1144.0, "series": [{"data": [[0.0, 16.0], [600.0, 298.0], [700.0, 319.0], [800.0, 293.0], [900.0, 199.0], [1000.0, 201.0], [1100.0, 190.0], [1200.0, 139.0], [1300.0, 123.0], [1400.0, 115.0], [1500.0, 103.0], [100.0, 1144.0], [1600.0, 62.0], [1700.0, 58.0], [1800.0, 35.0], [1900.0, 49.0], [2000.0, 27.0], [2100.0, 29.0], [2200.0, 17.0], [2300.0, 26.0], [2400.0, 16.0], [2500.0, 12.0], [2600.0, 16.0], [2700.0, 12.0], [2800.0, 3.0], [2900.0, 3.0], [3000.0, 8.0], [3100.0, 6.0], [200.0, 615.0], [3200.0, 6.0], [3300.0, 3.0], [3400.0, 1.0], [3500.0, 2.0], [3800.0, 3.0], [3900.0, 3.0], [4000.0, 5.0], [4100.0, 4.0], [4300.0, 1.0], [4200.0, 3.0], [4500.0, 1.0], [300.0, 366.0], [5000.0, 1.0], [400.0, 352.0], [500.0, 377.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 515.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2494.0, "series": [{"data": [[0.0, 2494.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2253.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 515.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.893333333333333, "minX": 1.6026417E12, "maxY": 12.0, "series": [{"data": [[1.602642E12, 11.902654867256635], [1.6026417E12, 11.893333333333333], [1.60264188E12, 12.0], [1.60264176E12, 12.0], [1.60264194E12, 12.0], [1.60264182E12, 12.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602642E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 698.3959923664142, "minX": 1.0, "maxY": 4078.0, "series": [{"data": [[8.0, 2185.5], [4.0, 4028.0], [2.0, 4078.0], [1.0, 3955.0], [9.0, 2097.0], [5.0, 1505.6666666666667], [10.0, 1575.0], [11.0, 1455.75], [6.0, 1581.6666666666667], [12.0, 698.3959923664142], [3.0, 4036.0], [7.0, 3392.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.979855568225016, 704.5722158874943]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3350.0666666666666, "minX": 1.6026417E12, "maxY": 1089521.7, "series": [{"data": [[1.602642E12, 579577.1666666666], [1.6026417E12, 183713.08333333334], [1.60264188E12, 665176.2166666667], [1.60264176E12, 1007857.1833333333], [1.60264194E12, 1089521.7], [1.60264182E12, 724787.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.602642E12, 6000.266666666666], [1.6026417E12, 3350.0666666666666], [1.60264188E12, 11058.666666666666], [1.60264176E12, 7683.25], [1.60264194E12, 8185.033333333334], [1.60264182E12, 9213.666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602642E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 552.1745173745172, "minX": 1.6026417E12, "maxY": 826.0368731563422, "series": [{"data": [[1.602642E12, 826.0368731563422], [1.6026417E12, 716.8800000000002], [1.60264188E12, 552.1745173745172], [1.60264176E12, 790.8214285714288], [1.60264194E12, 760.784810126582], [1.60264182E12, 685.7102803738314]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602642E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 551.9088803088795, "minX": 1.6026417E12, "maxY": 825.6519174041305, "series": [{"data": [[1.602642E12, 825.6519174041305], [1.6026417E12, 716.5946666666669], [1.60264188E12, 551.9088803088795], [1.60264176E12, 790.2421874999998], [1.60264194E12, 760.2341772151905], [1.60264182E12, 685.397196261683]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602642E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.007722007722007726, "minX": 1.6026417E12, "maxY": 0.3279999999999999, "series": [{"data": [[1.602642E12, 0.01917404129793511], [1.6026417E12, 0.3279999999999999], [1.60264188E12, 0.007722007722007726], [1.60264176E12, 0.014508928571428596], [1.60264194E12, 0.010548523206751054], [1.60264182E12, 0.012149532710280386]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602642E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.6026417E12, "maxY": 5005.0, "series": [{"data": [[1.602642E12, 4590.0], [1.6026417E12, 2219.0], [1.60264188E12, 2723.0], [1.60264176E12, 3349.0], [1.60264194E12, 3099.0], [1.60264182E12, 5005.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.602642E12, 131.0], [1.6026417E12, 135.38399991035462], [1.60264188E12, 77.66399969100952], [1.60264176E12, 117.0], [1.60264194E12, 127.54099977374077], [1.60264182E12, 140.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.602642E12, 131.0], [1.6026417E12, 135.72240003585816], [1.60264188E12, 84.64320098876954], [1.60264176E12, 117.0], [1.60264194E12, 128.0], [1.60264182E12, 140.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.602642E12, 131.0], [1.6026417E12, 135.57199995517732], [1.60264188E12, 80.49599876403808], [1.60264176E12, 117.0], [1.60264194E12, 128.0], [1.60264182E12, 140.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.602642E12, 128.0], [1.6026417E12, 66.0], [1.60264188E12, 37.0], [1.60264176E12, 92.0], [1.60264194E12, 105.0], [1.60264182E12, 106.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.602642E12, 589.0], [1.6026417E12, 640.0], [1.60264188E12, 357.0], [1.60264176E12, 697.0], [1.60264194E12, 688.5], [1.60264182E12, 425.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602642E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 158.0, "minX": 1.0, "maxY": 2490.5, "series": [{"data": [[2.0, 2412.0], [3.0, 2490.5], [4.0, 2183.0], [5.0, 1947.5], [6.0, 1614.0], [7.0, 1483.0], [8.0, 1296.5], [9.0, 1239.0], [10.0, 1132.5], [11.0, 1053.5], [12.0, 956.0], [13.0, 858.0], [14.0, 878.0], [15.0, 751.0], [16.0, 852.0], [17.0, 572.0], [18.0, 697.5], [19.0, 734.5], [20.0, 532.0], [21.0, 505.0], [22.0, 457.5], [23.0, 390.5], [24.0, 404.0], [25.0, 398.5], [26.0, 458.0], [27.0, 410.0], [28.0, 532.0], [29.0, 176.0], [30.0, 454.5], [31.0, 204.0], [32.0, 326.0], [33.0, 366.0], [34.0, 309.0], [37.0, 256.0], [36.0, 316.5], [38.0, 175.0], [39.0, 160.0], [41.0, 179.5], [40.0, 250.5], [43.0, 158.0], [42.0, 268.0], [45.0, 206.0], [44.0, 275.5], [46.0, 163.0], [47.0, 259.0], [48.0, 175.0], [50.0, 158.5], [51.0, 165.0], [52.0, 158.0], [71.0, 159.0], [1.0, 2076.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 158.0, "minX": 1.0, "maxY": 2487.5, "series": [{"data": [[2.0, 2412.0], [3.0, 2487.5], [4.0, 2180.5], [5.0, 1947.5], [6.0, 1612.0], [7.0, 1482.0], [8.0, 1296.5], [9.0, 1238.0], [10.0, 1132.5], [11.0, 1052.0], [12.0, 955.5], [13.0, 858.0], [14.0, 877.5], [15.0, 750.0], [16.0, 852.0], [17.0, 572.0], [18.0, 697.0], [19.0, 734.5], [20.0, 532.0], [21.0, 504.0], [22.0, 457.5], [23.0, 390.0], [24.0, 404.0], [25.0, 398.5], [26.0, 458.0], [27.0, 410.0], [28.0, 532.0], [29.0, 176.0], [30.0, 454.0], [31.0, 204.0], [32.0, 326.0], [33.0, 366.0], [34.0, 309.0], [37.0, 256.0], [36.0, 316.5], [38.0, 175.0], [39.0, 160.0], [41.0, 179.5], [40.0, 250.5], [43.0, 158.0], [42.0, 268.0], [45.0, 206.0], [44.0, 275.5], [46.0, 163.0], [47.0, 259.0], [48.0, 175.0], [50.0, 158.5], [51.0, 165.0], [52.0, 158.0], [71.0, 159.0], [1.0, 2074.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 71.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.45, "minX": 1.6026417E12, "maxY": 21.583333333333332, "series": [{"data": [[1.602642E12, 11.1], [1.6026417E12, 6.45], [1.60264188E12, 21.583333333333332], [1.60264176E12, 14.933333333333334], [1.60264194E12, 15.8], [1.60264182E12, 17.833333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602642E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.25, "minX": 1.6026417E12, "maxY": 21.583333333333332, "series": [{"data": [[1.602642E12, 11.3], [1.6026417E12, 6.25], [1.60264188E12, 21.583333333333332], [1.60264176E12, 14.933333333333334], [1.60264194E12, 15.8], [1.60264182E12, 17.833333333333332]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.602642E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.25, "minX": 1.6026417E12, "maxY": 21.583333333333332, "series": [{"data": [[1.602642E12, 11.3], [1.6026417E12, 6.25], [1.60264188E12, 21.583333333333332], [1.60264176E12, 14.933333333333334], [1.60264194E12, 15.8], [1.60264182E12, 17.833333333333332]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602642E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.25, "minX": 1.6026417E12, "maxY": 21.583333333333332, "series": [{"data": [[1.602642E12, 11.3], [1.6026417E12, 6.25], [1.60264188E12, 21.583333333333332], [1.60264176E12, 14.933333333333334], [1.60264194E12, 15.8], [1.60264182E12, 17.833333333333332]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.602642E12, "title": "Total Transactions Per Second"}},
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

