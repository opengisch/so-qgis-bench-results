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
        data: {"result": {"minY": 181.0, "minX": 0.0, "maxY": 6000.0, "series": [{"data": [[0.0, 181.0], [0.1, 187.0], [0.2, 189.0], [0.3, 193.0], [0.4, 193.0], [0.5, 194.0], [0.6, 195.0], [0.7, 196.0], [0.8, 198.0], [0.9, 199.0], [1.0, 200.0], [1.1, 201.0], [1.2, 201.0], [1.3, 201.0], [1.4, 202.0], [1.5, 202.0], [1.6, 203.0], [1.7, 204.0], [1.8, 204.0], [1.9, 205.0], [2.0, 206.0], [2.1, 206.0], [2.2, 207.0], [2.3, 207.0], [2.4, 208.0], [2.5, 208.0], [2.6, 208.0], [2.7, 209.0], [2.8, 209.0], [2.9, 210.0], [3.0, 210.0], [3.1, 210.0], [3.2, 211.0], [3.3, 212.0], [3.4, 212.0], [3.5, 212.0], [3.6, 213.0], [3.7, 214.0], [3.8, 215.0], [3.9, 215.0], [4.0, 216.0], [4.1, 216.0], [4.2, 217.0], [4.3, 217.0], [4.4, 218.0], [4.5, 218.0], [4.6, 219.0], [4.7, 219.0], [4.8, 219.0], [4.9, 220.0], [5.0, 220.0], [5.1, 221.0], [5.2, 221.0], [5.3, 223.0], [5.4, 223.0], [5.5, 224.0], [5.6, 224.0], [5.7, 225.0], [5.8, 225.0], [5.9, 226.0], [6.0, 227.0], [6.1, 227.0], [6.2, 228.0], [6.3, 228.0], [6.4, 229.0], [6.5, 229.0], [6.6, 230.0], [6.7, 230.0], [6.8, 230.0], [6.9, 231.0], [7.0, 231.0], [7.1, 232.0], [7.2, 232.0], [7.3, 232.0], [7.4, 233.0], [7.5, 233.0], [7.6, 234.0], [7.7, 234.0], [7.8, 235.0], [7.9, 236.0], [8.0, 236.0], [8.1, 236.0], [8.2, 237.0], [8.3, 237.0], [8.4, 238.0], [8.5, 238.0], [8.6, 239.0], [8.7, 239.0], [8.8, 240.0], [8.9, 240.0], [9.0, 241.0], [9.1, 242.0], [9.2, 242.0], [9.3, 243.0], [9.4, 243.0], [9.5, 244.0], [9.6, 244.0], [9.7, 244.0], [9.8, 244.0], [9.9, 245.0], [10.0, 245.0], [10.1, 246.0], [10.2, 246.0], [10.3, 247.0], [10.4, 247.0], [10.5, 248.0], [10.6, 248.0], [10.7, 249.0], [10.8, 249.0], [10.9, 250.0], [11.0, 250.0], [11.1, 250.0], [11.2, 251.0], [11.3, 251.0], [11.4, 252.0], [11.5, 252.0], [11.6, 252.0], [11.7, 253.0], [11.8, 253.0], [11.9, 254.0], [12.0, 255.0], [12.1, 255.0], [12.2, 256.0], [12.3, 257.0], [12.4, 257.0], [12.5, 257.0], [12.6, 258.0], [12.7, 258.0], [12.8, 259.0], [12.9, 259.0], [13.0, 260.0], [13.1, 261.0], [13.2, 262.0], [13.3, 263.0], [13.4, 263.0], [13.5, 263.0], [13.6, 264.0], [13.7, 264.0], [13.8, 265.0], [13.9, 265.0], [14.0, 266.0], [14.1, 266.0], [14.2, 267.0], [14.3, 267.0], [14.4, 268.0], [14.5, 269.0], [14.6, 269.0], [14.7, 270.0], [14.8, 271.0], [14.9, 271.0], [15.0, 272.0], [15.1, 273.0], [15.2, 273.0], [15.3, 273.0], [15.4, 274.0], [15.5, 275.0], [15.6, 275.0], [15.7, 275.0], [15.8, 276.0], [15.9, 276.0], [16.0, 277.0], [16.1, 277.0], [16.2, 277.0], [16.3, 278.0], [16.4, 278.0], [16.5, 279.0], [16.6, 279.0], [16.7, 280.0], [16.8, 281.0], [16.9, 281.0], [17.0, 281.0], [17.1, 282.0], [17.2, 282.0], [17.3, 282.0], [17.4, 283.0], [17.5, 283.0], [17.6, 284.0], [17.7, 284.0], [17.8, 285.0], [17.9, 285.0], [18.0, 286.0], [18.1, 286.0], [18.2, 287.0], [18.3, 287.0], [18.4, 287.0], [18.5, 288.0], [18.6, 289.0], [18.7, 289.0], [18.8, 289.0], [18.9, 290.0], [19.0, 290.0], [19.1, 291.0], [19.2, 291.0], [19.3, 292.0], [19.4, 292.0], [19.5, 292.0], [19.6, 292.0], [19.7, 293.0], [19.8, 294.0], [19.9, 294.0], [20.0, 295.0], [20.1, 295.0], [20.2, 296.0], [20.3, 296.0], [20.4, 297.0], [20.5, 297.0], [20.6, 298.0], [20.7, 298.0], [20.8, 298.0], [20.9, 299.0], [21.0, 299.0], [21.1, 299.0], [21.2, 300.0], [21.3, 300.0], [21.4, 301.0], [21.5, 301.0], [21.6, 301.0], [21.7, 302.0], [21.8, 302.0], [21.9, 303.0], [22.0, 304.0], [22.1, 304.0], [22.2, 304.0], [22.3, 305.0], [22.4, 305.0], [22.5, 305.0], [22.6, 306.0], [22.7, 307.0], [22.8, 307.0], [22.9, 307.0], [23.0, 308.0], [23.1, 308.0], [23.2, 309.0], [23.3, 309.0], [23.4, 310.0], [23.5, 310.0], [23.6, 311.0], [23.7, 311.0], [23.8, 312.0], [23.9, 313.0], [24.0, 313.0], [24.1, 313.0], [24.2, 314.0], [24.3, 314.0], [24.4, 314.0], [24.5, 315.0], [24.6, 315.0], [24.7, 315.0], [24.8, 316.0], [24.9, 317.0], [25.0, 317.0], [25.1, 318.0], [25.2, 318.0], [25.3, 319.0], [25.4, 319.0], [25.5, 320.0], [25.6, 321.0], [25.7, 321.0], [25.8, 322.0], [25.9, 322.0], [26.0, 323.0], [26.1, 323.0], [26.2, 324.0], [26.3, 324.0], [26.4, 324.0], [26.5, 325.0], [26.6, 325.0], [26.7, 326.0], [26.8, 326.0], [26.9, 327.0], [27.0, 328.0], [27.1, 328.0], [27.2, 328.0], [27.3, 329.0], [27.4, 329.0], [27.5, 330.0], [27.6, 331.0], [27.7, 332.0], [27.8, 332.0], [27.9, 333.0], [28.0, 333.0], [28.1, 334.0], [28.2, 335.0], [28.3, 335.0], [28.4, 336.0], [28.5, 336.0], [28.6, 337.0], [28.7, 338.0], [28.8, 338.0], [28.9, 338.0], [29.0, 339.0], [29.1, 339.0], [29.2, 340.0], [29.3, 340.0], [29.4, 341.0], [29.5, 341.0], [29.6, 342.0], [29.7, 342.0], [29.8, 343.0], [29.9, 343.0], [30.0, 344.0], [30.1, 344.0], [30.2, 345.0], [30.3, 346.0], [30.4, 347.0], [30.5, 347.0], [30.6, 348.0], [30.7, 348.0], [30.8, 348.0], [30.9, 349.0], [31.0, 350.0], [31.1, 350.0], [31.2, 351.0], [31.3, 351.0], [31.4, 352.0], [31.5, 352.0], [31.6, 354.0], [31.7, 354.0], [31.8, 354.0], [31.9, 354.0], [32.0, 355.0], [32.1, 355.0], [32.2, 356.0], [32.3, 356.0], [32.4, 357.0], [32.5, 357.0], [32.6, 358.0], [32.7, 359.0], [32.8, 359.0], [32.9, 359.0], [33.0, 360.0], [33.1, 360.0], [33.2, 361.0], [33.3, 361.0], [33.4, 362.0], [33.5, 362.0], [33.6, 362.0], [33.7, 363.0], [33.8, 363.0], [33.9, 364.0], [34.0, 364.0], [34.1, 365.0], [34.2, 366.0], [34.3, 366.0], [34.4, 367.0], [34.5, 367.0], [34.6, 367.0], [34.7, 368.0], [34.8, 368.0], [34.9, 369.0], [35.0, 370.0], [35.1, 370.0], [35.2, 371.0], [35.3, 372.0], [35.4, 372.0], [35.5, 373.0], [35.6, 373.0], [35.7, 373.0], [35.8, 374.0], [35.9, 375.0], [36.0, 375.0], [36.1, 376.0], [36.2, 377.0], [36.3, 377.0], [36.4, 378.0], [36.5, 379.0], [36.6, 380.0], [36.7, 380.0], [36.8, 381.0], [36.9, 381.0], [37.0, 382.0], [37.1, 382.0], [37.2, 383.0], [37.3, 383.0], [37.4, 384.0], [37.5, 385.0], [37.6, 386.0], [37.7, 386.0], [37.8, 387.0], [37.9, 388.0], [38.0, 388.0], [38.1, 389.0], [38.2, 390.0], [38.3, 390.0], [38.4, 390.0], [38.5, 391.0], [38.6, 392.0], [38.7, 392.0], [38.8, 393.0], [38.9, 394.0], [39.0, 394.0], [39.1, 395.0], [39.2, 397.0], [39.3, 397.0], [39.4, 397.0], [39.5, 398.0], [39.6, 399.0], [39.7, 400.0], [39.8, 400.0], [39.9, 401.0], [40.0, 402.0], [40.1, 402.0], [40.2, 403.0], [40.3, 404.0], [40.4, 404.0], [40.5, 405.0], [40.6, 405.0], [40.7, 406.0], [40.8, 407.0], [40.9, 407.0], [41.0, 408.0], [41.1, 409.0], [41.2, 410.0], [41.3, 411.0], [41.4, 412.0], [41.5, 412.0], [41.6, 413.0], [41.7, 415.0], [41.8, 416.0], [41.9, 417.0], [42.0, 417.0], [42.1, 418.0], [42.2, 419.0], [42.3, 419.0], [42.4, 420.0], [42.5, 420.0], [42.6, 421.0], [42.7, 422.0], [42.8, 424.0], [42.9, 425.0], [43.0, 426.0], [43.1, 427.0], [43.2, 428.0], [43.3, 429.0], [43.4, 430.0], [43.5, 431.0], [43.6, 433.0], [43.7, 434.0], [43.8, 435.0], [43.9, 436.0], [44.0, 437.0], [44.1, 438.0], [44.2, 439.0], [44.3, 440.0], [44.4, 441.0], [44.5, 443.0], [44.6, 444.0], [44.7, 444.0], [44.8, 446.0], [44.9, 449.0], [45.0, 449.0], [45.1, 451.0], [45.2, 452.0], [45.3, 453.0], [45.4, 454.0], [45.5, 455.0], [45.6, 456.0], [45.7, 456.0], [45.8, 457.0], [45.9, 458.0], [46.0, 459.0], [46.1, 460.0], [46.2, 462.0], [46.3, 462.0], [46.4, 463.0], [46.5, 464.0], [46.6, 465.0], [46.7, 466.0], [46.8, 466.0], [46.9, 468.0], [47.0, 469.0], [47.1, 470.0], [47.2, 471.0], [47.3, 473.0], [47.4, 473.0], [47.5, 475.0], [47.6, 476.0], [47.7, 477.0], [47.8, 479.0], [47.9, 479.0], [48.0, 480.0], [48.1, 481.0], [48.2, 481.0], [48.3, 482.0], [48.4, 484.0], [48.5, 486.0], [48.6, 487.0], [48.7, 488.0], [48.8, 489.0], [48.9, 491.0], [49.0, 492.0], [49.1, 493.0], [49.2, 495.0], [49.3, 496.0], [49.4, 498.0], [49.5, 500.0], [49.6, 502.0], [49.7, 503.0], [49.8, 504.0], [49.9, 505.0], [50.0, 507.0], [50.1, 509.0], [50.2, 511.0], [50.3, 513.0], [50.4, 515.0], [50.5, 516.0], [50.6, 519.0], [50.7, 520.0], [50.8, 522.0], [50.9, 524.0], [51.0, 526.0], [51.1, 528.0], [51.2, 530.0], [51.3, 532.0], [51.4, 533.0], [51.5, 533.0], [51.6, 535.0], [51.7, 536.0], [51.8, 538.0], [51.9, 539.0], [52.0, 540.0], [52.1, 541.0], [52.2, 543.0], [52.3, 546.0], [52.4, 546.0], [52.5, 548.0], [52.6, 550.0], [52.7, 552.0], [52.8, 553.0], [52.9, 554.0], [53.0, 557.0], [53.1, 559.0], [53.2, 560.0], [53.3, 561.0], [53.4, 561.0], [53.5, 563.0], [53.6, 563.0], [53.7, 565.0], [53.8, 567.0], [53.9, 568.0], [54.0, 570.0], [54.1, 572.0], [54.2, 574.0], [54.3, 576.0], [54.4, 578.0], [54.5, 579.0], [54.6, 581.0], [54.7, 583.0], [54.8, 584.0], [54.9, 585.0], [55.0, 587.0], [55.1, 588.0], [55.2, 589.0], [55.3, 592.0], [55.4, 594.0], [55.5, 596.0], [55.6, 597.0], [55.7, 599.0], [55.8, 600.0], [55.9, 601.0], [56.0, 602.0], [56.1, 604.0], [56.2, 605.0], [56.3, 606.0], [56.4, 610.0], [56.5, 612.0], [56.6, 613.0], [56.7, 613.0], [56.8, 615.0], [56.9, 616.0], [57.0, 617.0], [57.1, 618.0], [57.2, 619.0], [57.3, 621.0], [57.4, 622.0], [57.5, 623.0], [57.6, 624.0], [57.7, 625.0], [57.8, 626.0], [57.9, 629.0], [58.0, 629.0], [58.1, 630.0], [58.2, 631.0], [58.3, 634.0], [58.4, 635.0], [58.5, 637.0], [58.6, 638.0], [58.7, 639.0], [58.8, 640.0], [58.9, 641.0], [59.0, 642.0], [59.1, 643.0], [59.2, 645.0], [59.3, 646.0], [59.4, 648.0], [59.5, 651.0], [59.6, 653.0], [59.7, 654.0], [59.8, 656.0], [59.9, 657.0], [60.0, 659.0], [60.1, 660.0], [60.2, 662.0], [60.3, 663.0], [60.4, 665.0], [60.5, 668.0], [60.6, 671.0], [60.7, 674.0], [60.8, 675.0], [60.9, 677.0], [61.0, 680.0], [61.1, 682.0], [61.2, 683.0], [61.3, 686.0], [61.4, 688.0], [61.5, 689.0], [61.6, 692.0], [61.7, 694.0], [61.8, 698.0], [61.9, 699.0], [62.0, 701.0], [62.1, 704.0], [62.2, 706.0], [62.3, 708.0], [62.4, 712.0], [62.5, 713.0], [62.6, 715.0], [62.7, 716.0], [62.8, 718.0], [62.9, 719.0], [63.0, 721.0], [63.1, 722.0], [63.2, 723.0], [63.3, 724.0], [63.4, 726.0], [63.5, 727.0], [63.6, 729.0], [63.7, 731.0], [63.8, 733.0], [63.9, 733.0], [64.0, 734.0], [64.1, 736.0], [64.2, 738.0], [64.3, 739.0], [64.4, 740.0], [64.5, 743.0], [64.6, 746.0], [64.7, 748.0], [64.8, 751.0], [64.9, 753.0], [65.0, 754.0], [65.1, 757.0], [65.2, 758.0], [65.3, 759.0], [65.4, 762.0], [65.5, 762.0], [65.6, 764.0], [65.7, 766.0], [65.8, 767.0], [65.9, 770.0], [66.0, 772.0], [66.1, 774.0], [66.2, 775.0], [66.3, 776.0], [66.4, 779.0], [66.5, 781.0], [66.6, 781.0], [66.7, 785.0], [66.8, 788.0], [66.9, 792.0], [67.0, 793.0], [67.1, 795.0], [67.2, 796.0], [67.3, 797.0], [67.4, 799.0], [67.5, 801.0], [67.6, 803.0], [67.7, 805.0], [67.8, 808.0], [67.9, 810.0], [68.0, 812.0], [68.1, 812.0], [68.2, 814.0], [68.3, 816.0], [68.4, 819.0], [68.5, 822.0], [68.6, 824.0], [68.7, 826.0], [68.8, 828.0], [68.9, 829.0], [69.0, 832.0], [69.1, 835.0], [69.2, 836.0], [69.3, 837.0], [69.4, 838.0], [69.5, 841.0], [69.6, 842.0], [69.7, 843.0], [69.8, 846.0], [69.9, 849.0], [70.0, 850.0], [70.1, 852.0], [70.2, 857.0], [70.3, 860.0], [70.4, 862.0], [70.5, 864.0], [70.6, 868.0], [70.7, 870.0], [70.8, 872.0], [70.9, 874.0], [71.0, 875.0], [71.1, 878.0], [71.2, 880.0], [71.3, 882.0], [71.4, 884.0], [71.5, 886.0], [71.6, 889.0], [71.7, 891.0], [71.8, 892.0], [71.9, 896.0], [72.0, 898.0], [72.1, 899.0], [72.2, 902.0], [72.3, 904.0], [72.4, 906.0], [72.5, 911.0], [72.6, 912.0], [72.7, 915.0], [72.8, 918.0], [72.9, 920.0], [73.0, 923.0], [73.1, 924.0], [73.2, 927.0], [73.3, 929.0], [73.4, 933.0], [73.5, 934.0], [73.6, 937.0], [73.7, 938.0], [73.8, 940.0], [73.9, 941.0], [74.0, 943.0], [74.1, 944.0], [74.2, 947.0], [74.3, 950.0], [74.4, 952.0], [74.5, 955.0], [74.6, 957.0], [74.7, 959.0], [74.8, 961.0], [74.9, 963.0], [75.0, 966.0], [75.1, 969.0], [75.2, 970.0], [75.3, 975.0], [75.4, 977.0], [75.5, 978.0], [75.6, 980.0], [75.7, 983.0], [75.8, 985.0], [75.9, 987.0], [76.0, 990.0], [76.1, 993.0], [76.2, 996.0], [76.3, 999.0], [76.4, 1001.0], [76.5, 1002.0], [76.6, 1004.0], [76.7, 1005.0], [76.8, 1009.0], [76.9, 1013.0], [77.0, 1015.0], [77.1, 1017.0], [77.2, 1021.0], [77.3, 1023.0], [77.4, 1025.0], [77.5, 1026.0], [77.6, 1029.0], [77.7, 1030.0], [77.8, 1032.0], [77.9, 1036.0], [78.0, 1038.0], [78.1, 1042.0], [78.2, 1044.0], [78.3, 1047.0], [78.4, 1052.0], [78.5, 1055.0], [78.6, 1058.0], [78.7, 1062.0], [78.8, 1068.0], [78.9, 1071.0], [79.0, 1073.0], [79.1, 1075.0], [79.2, 1079.0], [79.3, 1081.0], [79.4, 1085.0], [79.5, 1090.0], [79.6, 1092.0], [79.7, 1094.0], [79.8, 1097.0], [79.9, 1102.0], [80.0, 1106.0], [80.1, 1109.0], [80.2, 1112.0], [80.3, 1113.0], [80.4, 1117.0], [80.5, 1119.0], [80.6, 1122.0], [80.7, 1124.0], [80.8, 1127.0], [80.9, 1131.0], [81.0, 1134.0], [81.1, 1139.0], [81.2, 1143.0], [81.3, 1148.0], [81.4, 1153.0], [81.5, 1155.0], [81.6, 1160.0], [81.7, 1163.0], [81.8, 1167.0], [81.9, 1171.0], [82.0, 1174.0], [82.1, 1175.0], [82.2, 1180.0], [82.3, 1183.0], [82.4, 1185.0], [82.5, 1188.0], [82.6, 1190.0], [82.7, 1193.0], [82.8, 1195.0], [82.9, 1198.0], [83.0, 1200.0], [83.1, 1205.0], [83.2, 1208.0], [83.3, 1211.0], [83.4, 1214.0], [83.5, 1216.0], [83.6, 1218.0], [83.7, 1221.0], [83.8, 1223.0], [83.9, 1225.0], [84.0, 1230.0], [84.1, 1233.0], [84.2, 1237.0], [84.3, 1240.0], [84.4, 1242.0], [84.5, 1246.0], [84.6, 1248.0], [84.7, 1251.0], [84.8, 1254.0], [84.9, 1258.0], [85.0, 1265.0], [85.1, 1267.0], [85.2, 1271.0], [85.3, 1275.0], [85.4, 1279.0], [85.5, 1284.0], [85.6, 1286.0], [85.7, 1289.0], [85.8, 1293.0], [85.9, 1296.0], [86.0, 1297.0], [86.1, 1300.0], [86.2, 1305.0], [86.3, 1308.0], [86.4, 1311.0], [86.5, 1315.0], [86.6, 1318.0], [86.7, 1323.0], [86.8, 1326.0], [86.9, 1331.0], [87.0, 1336.0], [87.1, 1339.0], [87.2, 1341.0], [87.3, 1344.0], [87.4, 1347.0], [87.5, 1351.0], [87.6, 1354.0], [87.7, 1360.0], [87.8, 1363.0], [87.9, 1367.0], [88.0, 1371.0], [88.1, 1376.0], [88.2, 1378.0], [88.3, 1380.0], [88.4, 1386.0], [88.5, 1388.0], [88.6, 1391.0], [88.7, 1398.0], [88.8, 1400.0], [88.9, 1402.0], [89.0, 1406.0], [89.1, 1409.0], [89.2, 1413.0], [89.3, 1417.0], [89.4, 1422.0], [89.5, 1428.0], [89.6, 1431.0], [89.7, 1435.0], [89.8, 1437.0], [89.9, 1443.0], [90.0, 1448.0], [90.1, 1452.0], [90.2, 1456.0], [90.3, 1459.0], [90.4, 1469.0], [90.5, 1473.0], [90.6, 1476.0], [90.7, 1479.0], [90.8, 1483.0], [90.9, 1486.0], [91.0, 1491.0], [91.1, 1499.0], [91.2, 1504.0], [91.3, 1507.0], [91.4, 1512.0], [91.5, 1518.0], [91.6, 1522.0], [91.7, 1528.0], [91.8, 1530.0], [91.9, 1536.0], [92.0, 1542.0], [92.1, 1549.0], [92.2, 1553.0], [92.3, 1558.0], [92.4, 1563.0], [92.5, 1565.0], [92.6, 1569.0], [92.7, 1574.0], [92.8, 1577.0], [92.9, 1580.0], [93.0, 1586.0], [93.1, 1591.0], [93.2, 1599.0], [93.3, 1600.0], [93.4, 1606.0], [93.5, 1610.0], [93.6, 1612.0], [93.7, 1619.0], [93.8, 1622.0], [93.9, 1625.0], [94.0, 1627.0], [94.1, 1633.0], [94.2, 1641.0], [94.3, 1646.0], [94.4, 1648.0], [94.5, 1653.0], [94.6, 1657.0], [94.7, 1662.0], [94.8, 1671.0], [94.9, 1675.0], [95.0, 1681.0], [95.1, 1687.0], [95.2, 1692.0], [95.3, 1703.0], [95.4, 1713.0], [95.5, 1718.0], [95.6, 1725.0], [95.7, 1728.0], [95.8, 1742.0], [95.9, 1753.0], [96.0, 1760.0], [96.1, 1772.0], [96.2, 1787.0], [96.3, 1798.0], [96.4, 1812.0], [96.5, 1822.0], [96.6, 1827.0], [96.7, 1844.0], [96.8, 1850.0], [96.9, 1860.0], [97.0, 1867.0], [97.1, 1876.0], [97.2, 1881.0], [97.3, 1891.0], [97.4, 1911.0], [97.5, 1927.0], [97.6, 1938.0], [97.7, 1953.0], [97.8, 1978.0], [97.9, 1997.0], [98.0, 2058.0], [98.1, 2075.0], [98.2, 2092.0], [98.3, 2108.0], [98.4, 2117.0], [98.5, 2168.0], [98.6, 2182.0], [98.7, 2222.0], [98.8, 2259.0], [98.9, 2306.0], [99.0, 2419.0], [99.1, 2481.0], [99.2, 2528.0], [99.3, 2682.0], [99.4, 2766.0], [99.5, 3050.0], [99.6, 3202.0], [99.7, 3381.0], [99.8, 4120.0], [99.9, 5036.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1046.0, "series": [{"data": [[600.0, 323.0], [700.0, 284.0], [800.0, 245.0], [900.0, 217.0], [1000.0, 182.0], [1100.0, 163.0], [1200.0, 159.0], [1300.0, 143.0], [1400.0, 122.0], [1500.0, 108.0], [1600.0, 106.0], [100.0, 50.0], [1700.0, 55.0], [1800.0, 55.0], [1900.0, 28.0], [2000.0, 16.0], [2100.0, 21.0], [2200.0, 13.0], [2300.0, 6.0], [2400.0, 8.0], [2500.0, 5.0], [2600.0, 4.0], [2800.0, 4.0], [2700.0, 4.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 4.0], [200.0, 1046.0], [3300.0, 4.0], [3200.0, 2.0], [3500.0, 3.0], [3700.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [4400.0, 1.0], [300.0, 963.0], [4800.0, 1.0], [5000.0, 3.0], [5100.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [6000.0, 1.0], [400.0, 509.0], [500.0, 324.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 457.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2571.0, "series": [{"data": [[0.0, 2571.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2162.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 457.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.817427385892115, "minX": 1.60438536E12, "maxY": 10.0, "series": [{"data": [[1.60438554E12, 10.0], [1.60438536E12, 9.992076069730585], [1.60438542E12, 10.0], [1.60438572E12, 9.817427385892115], [1.6043856E12, 10.0], [1.60438566E12, 10.0], [1.60438548E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438572E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 318.0, "minX": 1.0, "maxY": 2682.0, "series": [{"data": [[8.0, 318.0], [4.0, 1090.0], [2.0, 1935.0], [1.0, 2682.0], [9.0, 349.5], [10.0, 708.3359721954038], [5.0, 524.0], [6.0, 580.0], [3.0, 1263.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.990558766859387, 708.7593448940273]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1811.1833333333334, "minX": 1.60438536E12, "maxY": 4254090.916666667, "series": [{"data": [[1.60438554E12, 3800387.8333333335], [1.60438536E12, 3153550.7666666666], [1.60438542E12, 3871792.0], [1.60438572E12, 1238993.7166666666], [1.6043856E12, 3793334.35], [1.60438566E12, 3860689.8333333335], [1.60438548E12, 4254090.916666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438554E12, 5458.566666666667], [1.60438536E12, 4571.016666666666], [1.60438542E12, 6729.016666666666], [1.60438572E12, 1811.1833333333334], [1.6043856E12, 6397.833333333333], [1.60438566E12, 7033.9], [1.60438548E12, 6575.816666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438572E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 646.1467098166133, "minX": 1.60438536E12, "maxY": 868.5186721991703, "series": [{"data": [[1.60438554E12, 804.1080000000001], [1.60438536E12, 752.7575277337564], [1.60438542E12, 655.8896247240622], [1.60438572E12, 868.5186721991703], [1.6043856E12, 688.8177623990772], [1.60438566E12, 646.1467098166133], [1.60438548E12, 692.002304147466]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438572E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 643.9622437971962, "minX": 1.60438536E12, "maxY": 865.9875518672203, "series": [{"data": [[1.60438554E12, 801.5093333333333], [1.60438536E12, 749.9334389857371], [1.60438542E12, 653.5165562913902], [1.60438572E12, 865.9875518672203], [1.6043856E12, 686.6424452133793], [1.60438566E12, 643.9622437971962], [1.60438548E12, 689.5034562211979]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438572E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008629989212513504, "minX": 1.60438536E12, "maxY": 0.15847860538827224, "series": [{"data": [[1.60438554E12, 0.012000000000000004], [1.60438536E12, 0.15847860538827224], [1.60438542E12, 0.008830022075055196], [1.60438572E12, 0.058091286307053985], [1.6043856E12, 0.010380622837370249], [1.60438566E12, 0.008629989212513504], [1.60438548E12, 0.011520737327188953]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438572E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 181.0, "minX": 1.60438536E12, "maxY": 6000.0, "series": [{"data": [[1.60438554E12, 6000.0], [1.60438536E12, 5547.0], [1.60438542E12, 4862.0], [1.60438572E12, 3381.0], [1.6043856E12, 3533.0], [1.60438566E12, 3304.0], [1.60438548E12, 5154.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438554E12, 202.0], [1.60438536E12, 203.12799909591675], [1.60438542E12, 198.16299978375434], [1.60438572E12, 212.84799907684328], [1.6043856E12, 202.0], [1.60438566E12, 193.0], [1.60438548E12, 195.6419995856285]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438554E12, 202.43490007162094], [1.60438536E12, 205.51360012054442], [1.60438542E12, 198.97930008649826], [1.60438572E12, 216.3328003692627], [1.6043856E12, 203.18640016555787], [1.60438566E12, 193.187200088501], [1.60438548E12, 197.2062001657486]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438554E12, 202.13449991047383], [1.60438536E12, 205.00799984931945], [1.60438542E12, 198.61649989187717], [1.60438572E12, 214.78399953842163], [1.6043856E12, 202.49199979305268], [1.60438566E12, 193.0], [1.60438548E12, 196.51099979281426]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438554E12, 199.0], [1.60438536E12, 189.0], [1.60438542E12, 186.0], [1.60438572E12, 203.0], [1.6043856E12, 181.0], [1.60438566E12, 185.0], [1.60438548E12, 183.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438554E12, 681.5], [1.60438536E12, 629.0], [1.60438542E12, 391.0], [1.60438572E12, 748.0], [1.6043856E12, 433.0], [1.60438566E12, 402.0], [1.60438548E12, 415.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438572E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 238.5, "minX": 1.0, "maxY": 1529.5, "series": [{"data": [[33.0, 245.0], [34.0, 267.5], [39.0, 253.0], [4.0, 1176.5], [5.0, 1081.5], [6.0, 1078.0], [7.0, 1107.5], [8.0, 864.5], [9.0, 900.0], [10.0, 795.5], [11.0, 704.0], [12.0, 735.0], [13.0, 578.0], [14.0, 603.0], [15.0, 572.0], [1.0, 1529.5], [16.0, 467.0], [17.0, 497.5], [18.0, 404.0], [19.0, 381.0], [20.0, 462.0], [21.0, 363.5], [22.0, 295.0], [23.0, 377.0], [24.0, 311.5], [25.0, 273.0], [26.0, 272.0], [27.0, 299.0], [28.0, 238.5], [29.0, 250.0], [30.0, 259.0], [31.0, 251.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 238.5, "minX": 1.0, "maxY": 1522.0, "series": [{"data": [[33.0, 244.0], [34.0, 266.5], [39.0, 253.0], [4.0, 1173.5], [5.0, 1080.0], [6.0, 1076.0], [7.0, 1106.0], [8.0, 861.5], [9.0, 898.0], [10.0, 794.5], [11.0, 702.0], [12.0, 733.0], [13.0, 577.0], [14.0, 602.5], [15.0, 569.0], [1.0, 1522.0], [16.0, 463.0], [17.0, 497.0], [18.0, 403.0], [19.0, 381.0], [20.0, 461.0], [21.0, 362.5], [22.0, 294.5], [23.0, 376.0], [24.0, 306.5], [25.0, 272.5], [26.0, 272.0], [27.0, 299.0], [28.0, 238.5], [29.0, 249.0], [30.0, 257.5], [31.0, 250.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.85, "minX": 1.60438536E12, "maxY": 15.45, "series": [{"data": [[1.60438554E12, 12.5], [1.60438536E12, 10.683333333333334], [1.60438542E12, 15.1], [1.60438572E12, 3.85], [1.6043856E12, 14.45], [1.60438566E12, 15.45], [1.60438548E12, 14.466666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438572E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.60438536E12, "maxY": 15.45, "series": [{"data": [[1.60438554E12, 12.5], [1.60438536E12, 10.516666666666667], [1.60438542E12, 15.1], [1.60438572E12, 4.016666666666667], [1.6043856E12, 14.45], [1.60438566E12, 15.45], [1.60438548E12, 14.466666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438572E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.60438536E12, "maxY": 15.45, "series": [{"data": [[1.60438554E12, 12.5], [1.60438536E12, 10.516666666666667], [1.60438542E12, 15.1], [1.60438572E12, 4.016666666666667], [1.6043856E12, 14.45], [1.60438566E12, 15.45], [1.60438548E12, 14.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438572E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.60438536E12, "maxY": 15.45, "series": [{"data": [[1.60438554E12, 12.5], [1.60438536E12, 10.516666666666667], [1.60438542E12, 15.1], [1.60438572E12, 4.016666666666667], [1.6043856E12, 14.45], [1.60438566E12, 15.45], [1.60438548E12, 14.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438572E12, "title": "Total Transactions Per Second"}},
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

