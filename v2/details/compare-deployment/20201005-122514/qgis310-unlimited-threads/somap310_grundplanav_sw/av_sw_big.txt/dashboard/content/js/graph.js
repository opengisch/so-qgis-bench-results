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
        data: {"result": {"minY": 2289.0, "minX": 0.0, "maxY": 17955.0, "series": [{"data": [[0.0, 2289.0], [0.1, 2368.0], [0.2, 2396.0], [0.3, 2450.0], [0.4, 2458.0], [0.5, 2471.0], [0.6, 2488.0], [0.7, 2503.0], [0.8, 2524.0], [0.9, 2537.0], [1.0, 2559.0], [1.1, 2572.0], [1.2, 2587.0], [1.3, 2611.0], [1.4, 2623.0], [1.5, 2636.0], [1.6, 2657.0], [1.7, 2663.0], [1.8, 2676.0], [1.9, 2687.0], [2.0, 2719.0], [2.1, 2727.0], [2.2, 2734.0], [2.3, 2745.0], [2.4, 2748.0], [2.5, 2758.0], [2.6, 2771.0], [2.7, 2801.0], [2.8, 2816.0], [2.9, 2837.0], [3.0, 2860.0], [3.1, 2896.0], [3.2, 2914.0], [3.3, 2946.0], [3.4, 2964.0], [3.5, 2979.0], [3.6, 2991.0], [3.7, 3004.0], [3.8, 3007.0], [3.9, 3017.0], [4.0, 3025.0], [4.1, 3062.0], [4.2, 3082.0], [4.3, 3092.0], [4.4, 3108.0], [4.5, 3121.0], [4.6, 3139.0], [4.7, 3151.0], [4.8, 3158.0], [4.9, 3166.0], [5.0, 3185.0], [5.1, 3201.0], [5.2, 3226.0], [5.3, 3230.0], [5.4, 3237.0], [5.5, 3256.0], [5.6, 3266.0], [5.7, 3275.0], [5.8, 3284.0], [5.9, 3301.0], [6.0, 3313.0], [6.1, 3331.0], [6.2, 3350.0], [6.3, 3356.0], [6.4, 3364.0], [6.5, 3375.0], [6.6, 3379.0], [6.7, 3392.0], [6.8, 3424.0], [6.9, 3440.0], [7.0, 3452.0], [7.1, 3478.0], [7.2, 3485.0], [7.3, 3496.0], [7.4, 3510.0], [7.5, 3515.0], [7.6, 3537.0], [7.7, 3546.0], [7.8, 3559.0], [7.9, 3579.0], [8.0, 3590.0], [8.1, 3611.0], [8.2, 3617.0], [8.3, 3625.0], [8.4, 3632.0], [8.5, 3646.0], [8.6, 3652.0], [8.7, 3657.0], [8.8, 3667.0], [8.9, 3684.0], [9.0, 3712.0], [9.1, 3717.0], [9.2, 3732.0], [9.3, 3739.0], [9.4, 3754.0], [9.5, 3772.0], [9.6, 3788.0], [9.7, 3793.0], [9.8, 3801.0], [9.9, 3817.0], [10.0, 3832.0], [10.1, 3846.0], [10.2, 3864.0], [10.3, 3869.0], [10.4, 3878.0], [10.5, 3890.0], [10.6, 3900.0], [10.7, 3904.0], [10.8, 3914.0], [10.9, 3919.0], [11.0, 3932.0], [11.1, 3945.0], [11.2, 3954.0], [11.3, 3965.0], [11.4, 3973.0], [11.5, 3977.0], [11.6, 3990.0], [11.7, 4000.0], [11.8, 4005.0], [11.9, 4017.0], [12.0, 4022.0], [12.1, 4038.0], [12.2, 4047.0], [12.3, 4057.0], [12.4, 4071.0], [12.5, 4074.0], [12.6, 4084.0], [12.7, 4092.0], [12.8, 4100.0], [12.9, 4111.0], [13.0, 4119.0], [13.1, 4128.0], [13.2, 4136.0], [13.3, 4148.0], [13.4, 4154.0], [13.5, 4159.0], [13.6, 4167.0], [13.7, 4176.0], [13.8, 4188.0], [13.9, 4200.0], [14.0, 4213.0], [14.1, 4222.0], [14.2, 4234.0], [14.3, 4248.0], [14.4, 4257.0], [14.5, 4264.0], [14.6, 4280.0], [14.7, 4288.0], [14.8, 4294.0], [14.9, 4297.0], [15.0, 4309.0], [15.1, 4315.0], [15.2, 4323.0], [15.3, 4330.0], [15.4, 4339.0], [15.5, 4354.0], [15.6, 4363.0], [15.7, 4374.0], [15.8, 4387.0], [15.9, 4395.0], [16.0, 4407.0], [16.1, 4418.0], [16.2, 4423.0], [16.3, 4433.0], [16.4, 4440.0], [16.5, 4447.0], [16.6, 4453.0], [16.7, 4468.0], [16.8, 4475.0], [16.9, 4479.0], [17.0, 4483.0], [17.1, 4490.0], [17.2, 4502.0], [17.3, 4512.0], [17.4, 4519.0], [17.5, 4530.0], [17.6, 4537.0], [17.7, 4544.0], [17.8, 4552.0], [17.9, 4562.0], [18.0, 4569.0], [18.1, 4585.0], [18.2, 4593.0], [18.3, 4598.0], [18.4, 4606.0], [18.5, 4612.0], [18.6, 4617.0], [18.7, 4629.0], [18.8, 4639.0], [18.9, 4654.0], [19.0, 4660.0], [19.1, 4666.0], [19.2, 4670.0], [19.3, 4675.0], [19.4, 4684.0], [19.5, 4692.0], [19.6, 4701.0], [19.7, 4705.0], [19.8, 4709.0], [19.9, 4719.0], [20.0, 4724.0], [20.1, 4732.0], [20.2, 4733.0], [20.3, 4742.0], [20.4, 4747.0], [20.5, 4757.0], [20.6, 4764.0], [20.7, 4770.0], [20.8, 4781.0], [20.9, 4785.0], [21.0, 4797.0], [21.1, 4801.0], [21.2, 4804.0], [21.3, 4814.0], [21.4, 4819.0], [21.5, 4829.0], [21.6, 4836.0], [21.7, 4844.0], [21.8, 4847.0], [21.9, 4859.0], [22.0, 4862.0], [22.1, 4866.0], [22.2, 4871.0], [22.3, 4880.0], [22.4, 4888.0], [22.5, 4893.0], [22.6, 4902.0], [22.7, 4905.0], [22.8, 4909.0], [22.9, 4918.0], [23.0, 4921.0], [23.1, 4924.0], [23.2, 4928.0], [23.3, 4931.0], [23.4, 4939.0], [23.5, 4944.0], [23.6, 4946.0], [23.7, 4950.0], [23.8, 4955.0], [23.9, 4960.0], [24.0, 4964.0], [24.1, 4977.0], [24.2, 4985.0], [24.3, 4990.0], [24.4, 4995.0], [24.5, 4998.0], [24.6, 5010.0], [24.7, 5018.0], [24.8, 5021.0], [24.9, 5029.0], [25.0, 5032.0], [25.1, 5041.0], [25.2, 5049.0], [25.3, 5055.0], [25.4, 5061.0], [25.5, 5066.0], [25.6, 5072.0], [25.7, 5078.0], [25.8, 5083.0], [25.9, 5094.0], [26.0, 5096.0], [26.1, 5103.0], [26.2, 5112.0], [26.3, 5119.0], [26.4, 5127.0], [26.5, 5130.0], [26.6, 5137.0], [26.7, 5142.0], [26.8, 5153.0], [26.9, 5160.0], [27.0, 5165.0], [27.1, 5173.0], [27.2, 5177.0], [27.3, 5185.0], [27.4, 5197.0], [27.5, 5202.0], [27.6, 5207.0], [27.7, 5214.0], [27.8, 5221.0], [27.9, 5231.0], [28.0, 5236.0], [28.1, 5241.0], [28.2, 5246.0], [28.3, 5250.0], [28.4, 5256.0], [28.5, 5261.0], [28.6, 5266.0], [28.7, 5270.0], [28.8, 5277.0], [28.9, 5283.0], [29.0, 5293.0], [29.1, 5301.0], [29.2, 5307.0], [29.3, 5313.0], [29.4, 5316.0], [29.5, 5323.0], [29.6, 5326.0], [29.7, 5331.0], [29.8, 5338.0], [29.9, 5343.0], [30.0, 5353.0], [30.1, 5357.0], [30.2, 5363.0], [30.3, 5369.0], [30.4, 5373.0], [30.5, 5383.0], [30.6, 5389.0], [30.7, 5396.0], [30.8, 5402.0], [30.9, 5409.0], [31.0, 5417.0], [31.1, 5423.0], [31.2, 5428.0], [31.3, 5433.0], [31.4, 5439.0], [31.5, 5445.0], [31.6, 5449.0], [31.7, 5456.0], [31.8, 5460.0], [31.9, 5467.0], [32.0, 5476.0], [32.1, 5483.0], [32.2, 5490.0], [32.3, 5496.0], [32.4, 5501.0], [32.5, 5505.0], [32.6, 5509.0], [32.7, 5513.0], [32.8, 5522.0], [32.9, 5525.0], [33.0, 5534.0], [33.1, 5540.0], [33.2, 5551.0], [33.3, 5557.0], [33.4, 5562.0], [33.5, 5566.0], [33.6, 5572.0], [33.7, 5575.0], [33.8, 5578.0], [33.9, 5583.0], [34.0, 5586.0], [34.1, 5590.0], [34.2, 5592.0], [34.3, 5595.0], [34.4, 5601.0], [34.5, 5604.0], [34.6, 5607.0], [34.7, 5615.0], [34.8, 5621.0], [34.9, 5626.0], [35.0, 5634.0], [35.1, 5636.0], [35.2, 5639.0], [35.3, 5643.0], [35.4, 5648.0], [35.5, 5651.0], [35.6, 5655.0], [35.7, 5661.0], [35.8, 5664.0], [35.9, 5668.0], [36.0, 5672.0], [36.1, 5674.0], [36.2, 5681.0], [36.3, 5689.0], [36.4, 5694.0], [36.5, 5698.0], [36.6, 5702.0], [36.7, 5707.0], [36.8, 5709.0], [36.9, 5713.0], [37.0, 5715.0], [37.1, 5723.0], [37.2, 5726.0], [37.3, 5731.0], [37.4, 5736.0], [37.5, 5739.0], [37.6, 5745.0], [37.7, 5752.0], [37.8, 5755.0], [37.9, 5757.0], [38.0, 5759.0], [38.1, 5761.0], [38.2, 5766.0], [38.3, 5771.0], [38.4, 5774.0], [38.5, 5778.0], [38.6, 5782.0], [38.7, 5786.0], [38.8, 5799.0], [38.9, 5806.0], [39.0, 5819.0], [39.1, 5824.0], [39.2, 5828.0], [39.3, 5835.0], [39.4, 5839.0], [39.5, 5843.0], [39.6, 5850.0], [39.7, 5856.0], [39.8, 5862.0], [39.9, 5868.0], [40.0, 5873.0], [40.1, 5878.0], [40.2, 5882.0], [40.3, 5884.0], [40.4, 5892.0], [40.5, 5897.0], [40.6, 5899.0], [40.7, 5900.0], [40.8, 5903.0], [40.9, 5907.0], [41.0, 5911.0], [41.1, 5916.0], [41.2, 5918.0], [41.3, 5922.0], [41.4, 5924.0], [41.5, 5932.0], [41.6, 5935.0], [41.7, 5939.0], [41.8, 5940.0], [41.9, 5944.0], [42.0, 5949.0], [42.1, 5952.0], [42.2, 5955.0], [42.3, 5964.0], [42.4, 5967.0], [42.5, 5973.0], [42.6, 5976.0], [42.7, 5984.0], [42.8, 5991.0], [42.9, 5996.0], [43.0, 6001.0], [43.1, 6009.0], [43.2, 6014.0], [43.3, 6016.0], [43.4, 6019.0], [43.5, 6025.0], [43.6, 6030.0], [43.7, 6035.0], [43.8, 6043.0], [43.9, 6048.0], [44.0, 6059.0], [44.1, 6062.0], [44.2, 6066.0], [44.3, 6073.0], [44.4, 6077.0], [44.5, 6079.0], [44.6, 6086.0], [44.7, 6091.0], [44.8, 6099.0], [44.9, 6107.0], [45.0, 6112.0], [45.1, 6121.0], [45.2, 6126.0], [45.3, 6131.0], [45.4, 6135.0], [45.5, 6140.0], [45.6, 6145.0], [45.7, 6148.0], [45.8, 6156.0], [45.9, 6159.0], [46.0, 6163.0], [46.1, 6165.0], [46.2, 6171.0], [46.3, 6181.0], [46.4, 6182.0], [46.5, 6187.0], [46.6, 6192.0], [46.7, 6200.0], [46.8, 6205.0], [46.9, 6208.0], [47.0, 6212.0], [47.1, 6218.0], [47.2, 6223.0], [47.3, 6230.0], [47.4, 6233.0], [47.5, 6241.0], [47.6, 6247.0], [47.7, 6256.0], [47.8, 6259.0], [47.9, 6269.0], [48.0, 6274.0], [48.1, 6277.0], [48.2, 6293.0], [48.3, 6297.0], [48.4, 6306.0], [48.5, 6309.0], [48.6, 6317.0], [48.7, 6326.0], [48.8, 6331.0], [48.9, 6336.0], [49.0, 6343.0], [49.1, 6346.0], [49.2, 6357.0], [49.3, 6363.0], [49.4, 6367.0], [49.5, 6368.0], [49.6, 6374.0], [49.7, 6382.0], [49.8, 6385.0], [49.9, 6387.0], [50.0, 6392.0], [50.1, 6395.0], [50.2, 6403.0], [50.3, 6410.0], [50.4, 6415.0], [50.5, 6418.0], [50.6, 6429.0], [50.7, 6431.0], [50.8, 6437.0], [50.9, 6445.0], [51.0, 6447.0], [51.1, 6453.0], [51.2, 6457.0], [51.3, 6459.0], [51.4, 6462.0], [51.5, 6467.0], [51.6, 6475.0], [51.7, 6480.0], [51.8, 6485.0], [51.9, 6495.0], [52.0, 6501.0], [52.1, 6505.0], [52.2, 6508.0], [52.3, 6515.0], [52.4, 6527.0], [52.5, 6534.0], [52.6, 6546.0], [52.7, 6551.0], [52.8, 6556.0], [52.9, 6560.0], [53.0, 6564.0], [53.1, 6567.0], [53.2, 6572.0], [53.3, 6576.0], [53.4, 6582.0], [53.5, 6585.0], [53.6, 6590.0], [53.7, 6593.0], [53.8, 6597.0], [53.9, 6600.0], [54.0, 6605.0], [54.1, 6609.0], [54.2, 6615.0], [54.3, 6618.0], [54.4, 6621.0], [54.5, 6624.0], [54.6, 6631.0], [54.7, 6637.0], [54.8, 6640.0], [54.9, 6645.0], [55.0, 6651.0], [55.1, 6655.0], [55.2, 6659.0], [55.3, 6664.0], [55.4, 6667.0], [55.5, 6671.0], [55.6, 6674.0], [55.7, 6677.0], [55.8, 6681.0], [55.9, 6690.0], [56.0, 6692.0], [56.1, 6697.0], [56.2, 6703.0], [56.3, 6707.0], [56.4, 6711.0], [56.5, 6716.0], [56.6, 6718.0], [56.7, 6723.0], [56.8, 6729.0], [56.9, 6732.0], [57.0, 6739.0], [57.1, 6744.0], [57.2, 6746.0], [57.3, 6754.0], [57.4, 6758.0], [57.5, 6765.0], [57.6, 6774.0], [57.7, 6780.0], [57.8, 6787.0], [57.9, 6788.0], [58.0, 6795.0], [58.1, 6805.0], [58.2, 6810.0], [58.3, 6812.0], [58.4, 6821.0], [58.5, 6825.0], [58.6, 6832.0], [58.7, 6837.0], [58.8, 6838.0], [58.9, 6841.0], [59.0, 6844.0], [59.1, 6849.0], [59.2, 6852.0], [59.3, 6865.0], [59.4, 6871.0], [59.5, 6877.0], [59.6, 6886.0], [59.7, 6889.0], [59.8, 6891.0], [59.9, 6895.0], [60.0, 6905.0], [60.1, 6910.0], [60.2, 6916.0], [60.3, 6922.0], [60.4, 6925.0], [60.5, 6932.0], [60.6, 6946.0], [60.7, 6951.0], [60.8, 6954.0], [60.9, 6957.0], [61.0, 6961.0], [61.1, 6964.0], [61.2, 6968.0], [61.3, 6974.0], [61.4, 6977.0], [61.5, 6981.0], [61.6, 6985.0], [61.7, 6991.0], [61.8, 6995.0], [61.9, 6998.0], [62.0, 7003.0], [62.1, 7004.0], [62.2, 7008.0], [62.3, 7010.0], [62.4, 7016.0], [62.5, 7020.0], [62.6, 7023.0], [62.7, 7028.0], [62.8, 7030.0], [62.9, 7034.0], [63.0, 7041.0], [63.1, 7046.0], [63.2, 7058.0], [63.3, 7065.0], [63.4, 7070.0], [63.5, 7078.0], [63.6, 7084.0], [63.7, 7087.0], [63.8, 7092.0], [63.9, 7103.0], [64.0, 7106.0], [64.1, 7112.0], [64.2, 7117.0], [64.3, 7122.0], [64.4, 7134.0], [64.5, 7137.0], [64.6, 7144.0], [64.7, 7147.0], [64.8, 7150.0], [64.9, 7157.0], [65.0, 7164.0], [65.1, 7169.0], [65.2, 7174.0], [65.3, 7184.0], [65.4, 7197.0], [65.5, 7202.0], [65.6, 7204.0], [65.7, 7208.0], [65.8, 7211.0], [65.9, 7220.0], [66.0, 7224.0], [66.1, 7225.0], [66.2, 7227.0], [66.3, 7237.0], [66.4, 7249.0], [66.5, 7254.0], [66.6, 7258.0], [66.7, 7262.0], [66.8, 7265.0], [66.9, 7269.0], [67.0, 7274.0], [67.1, 7283.0], [67.2, 7287.0], [67.3, 7292.0], [67.4, 7296.0], [67.5, 7301.0], [67.6, 7305.0], [67.7, 7308.0], [67.8, 7309.0], [67.9, 7313.0], [68.0, 7321.0], [68.1, 7335.0], [68.2, 7338.0], [68.3, 7343.0], [68.4, 7345.0], [68.5, 7354.0], [68.6, 7363.0], [68.7, 7366.0], [68.8, 7370.0], [68.9, 7378.0], [69.0, 7384.0], [69.1, 7389.0], [69.2, 7396.0], [69.3, 7405.0], [69.4, 7408.0], [69.5, 7413.0], [69.6, 7427.0], [69.7, 7431.0], [69.8, 7437.0], [69.9, 7444.0], [70.0, 7447.0], [70.1, 7454.0], [70.2, 7460.0], [70.3, 7467.0], [70.4, 7473.0], [70.5, 7477.0], [70.6, 7488.0], [70.7, 7490.0], [70.8, 7498.0], [70.9, 7509.0], [71.0, 7511.0], [71.1, 7515.0], [71.2, 7518.0], [71.3, 7521.0], [71.4, 7523.0], [71.5, 7529.0], [71.6, 7533.0], [71.7, 7536.0], [71.8, 7540.0], [71.9, 7549.0], [72.0, 7555.0], [72.1, 7561.0], [72.2, 7568.0], [72.3, 7572.0], [72.4, 7580.0], [72.5, 7582.0], [72.6, 7591.0], [72.7, 7596.0], [72.8, 7600.0], [72.9, 7609.0], [73.0, 7620.0], [73.1, 7630.0], [73.2, 7637.0], [73.3, 7643.0], [73.4, 7649.0], [73.5, 7653.0], [73.6, 7658.0], [73.7, 7662.0], [73.8, 7672.0], [73.9, 7687.0], [74.0, 7698.0], [74.1, 7709.0], [74.2, 7713.0], [74.3, 7714.0], [74.4, 7721.0], [74.5, 7723.0], [74.6, 7730.0], [74.7, 7733.0], [74.8, 7742.0], [74.9, 7751.0], [75.0, 7755.0], [75.1, 7763.0], [75.2, 7766.0], [75.3, 7771.0], [75.4, 7777.0], [75.5, 7785.0], [75.6, 7788.0], [75.7, 7795.0], [75.8, 7805.0], [75.9, 7810.0], [76.0, 7814.0], [76.1, 7820.0], [76.2, 7827.0], [76.3, 7829.0], [76.4, 7834.0], [76.5, 7851.0], [76.6, 7857.0], [76.7, 7867.0], [76.8, 7872.0], [76.9, 7875.0], [77.0, 7884.0], [77.1, 7887.0], [77.2, 7897.0], [77.3, 7904.0], [77.4, 7915.0], [77.5, 7920.0], [77.6, 7928.0], [77.7, 7942.0], [77.8, 7946.0], [77.9, 7953.0], [78.0, 7957.0], [78.1, 7963.0], [78.2, 7976.0], [78.3, 7990.0], [78.4, 7995.0], [78.5, 8001.0], [78.6, 8010.0], [78.7, 8014.0], [78.8, 8019.0], [78.9, 8032.0], [79.0, 8037.0], [79.1, 8051.0], [79.2, 8055.0], [79.3, 8062.0], [79.4, 8068.0], [79.5, 8074.0], [79.6, 8085.0], [79.7, 8093.0], [79.8, 8097.0], [79.9, 8117.0], [80.0, 8128.0], [80.1, 8135.0], [80.2, 8156.0], [80.3, 8174.0], [80.4, 8185.0], [80.5, 8189.0], [80.6, 8197.0], [80.7, 8202.0], [80.8, 8217.0], [80.9, 8230.0], [81.0, 8242.0], [81.1, 8247.0], [81.2, 8260.0], [81.3, 8265.0], [81.4, 8283.0], [81.5, 8301.0], [81.6, 8309.0], [81.7, 8319.0], [81.8, 8329.0], [81.9, 8332.0], [82.0, 8348.0], [82.1, 8356.0], [82.2, 8371.0], [82.3, 8381.0], [82.4, 8391.0], [82.5, 8405.0], [82.6, 8420.0], [82.7, 8435.0], [82.8, 8442.0], [82.9, 8450.0], [83.0, 8456.0], [83.1, 8463.0], [83.2, 8469.0], [83.3, 8483.0], [83.4, 8497.0], [83.5, 8509.0], [83.6, 8520.0], [83.7, 8528.0], [83.8, 8541.0], [83.9, 8548.0], [84.0, 8557.0], [84.1, 8560.0], [84.2, 8570.0], [84.3, 8577.0], [84.4, 8602.0], [84.5, 8609.0], [84.6, 8611.0], [84.7, 8617.0], [84.8, 8632.0], [84.9, 8640.0], [85.0, 8650.0], [85.1, 8665.0], [85.2, 8669.0], [85.3, 8673.0], [85.4, 8680.0], [85.5, 8686.0], [85.6, 8701.0], [85.7, 8709.0], [85.8, 8725.0], [85.9, 8731.0], [86.0, 8740.0], [86.1, 8748.0], [86.2, 8766.0], [86.3, 8773.0], [86.4, 8787.0], [86.5, 8793.0], [86.6, 8813.0], [86.7, 8830.0], [86.8, 8837.0], [86.9, 8851.0], [87.0, 8880.0], [87.1, 8902.0], [87.2, 8908.0], [87.3, 8918.0], [87.4, 8936.0], [87.5, 8945.0], [87.6, 8954.0], [87.7, 8963.0], [87.8, 8978.0], [87.9, 8984.0], [88.0, 9002.0], [88.1, 9013.0], [88.2, 9022.0], [88.3, 9030.0], [88.4, 9045.0], [88.5, 9068.0], [88.6, 9074.0], [88.7, 9089.0], [88.8, 9096.0], [88.9, 9105.0], [89.0, 9111.0], [89.1, 9119.0], [89.2, 9135.0], [89.3, 9152.0], [89.4, 9164.0], [89.5, 9175.0], [89.6, 9182.0], [89.7, 9189.0], [89.8, 9206.0], [89.9, 9217.0], [90.0, 9248.0], [90.1, 9276.0], [90.2, 9284.0], [90.3, 9302.0], [90.4, 9318.0], [90.5, 9326.0], [90.6, 9346.0], [90.7, 9372.0], [90.8, 9389.0], [90.9, 9407.0], [91.0, 9414.0], [91.1, 9421.0], [91.2, 9436.0], [91.3, 9465.0], [91.4, 9472.0], [91.5, 9494.0], [91.6, 9520.0], [91.7, 9532.0], [91.8, 9545.0], [91.9, 9556.0], [92.0, 9571.0], [92.1, 9594.0], [92.2, 9611.0], [92.3, 9630.0], [92.4, 9661.0], [92.5, 9684.0], [92.6, 9710.0], [92.7, 9734.0], [92.8, 9740.0], [92.9, 9755.0], [93.0, 9767.0], [93.1, 9781.0], [93.2, 9823.0], [93.3, 9853.0], [93.4, 9871.0], [93.5, 9893.0], [93.6, 9900.0], [93.7, 9930.0], [93.8, 9962.0], [93.9, 9975.0], [94.0, 10002.0], [94.1, 10028.0], [94.2, 10046.0], [94.3, 10083.0], [94.4, 10110.0], [94.5, 10119.0], [94.6, 10139.0], [94.7, 10181.0], [94.8, 10223.0], [94.9, 10273.0], [95.0, 10328.0], [95.1, 10362.0], [95.2, 10396.0], [95.3, 10442.0], [95.4, 10524.0], [95.5, 10548.0], [95.6, 10593.0], [95.7, 10609.0], [95.8, 10659.0], [95.9, 10698.0], [96.0, 10728.0], [96.1, 10767.0], [96.2, 10838.0], [96.3, 10882.0], [96.4, 10922.0], [96.5, 10963.0], [96.6, 11030.0], [96.7, 11085.0], [96.8, 11175.0], [96.9, 11301.0], [97.0, 11335.0], [97.1, 11445.0], [97.2, 11531.0], [97.3, 11573.0], [97.4, 11631.0], [97.5, 11711.0], [97.6, 11752.0], [97.7, 11869.0], [97.8, 11925.0], [97.9, 12011.0], [98.0, 12110.0], [98.1, 12191.0], [98.2, 12253.0], [98.3, 12372.0], [98.4, 12481.0], [98.5, 12611.0], [98.6, 12700.0], [98.7, 12811.0], [98.8, 12977.0], [98.9, 13111.0], [99.0, 13261.0], [99.1, 13381.0], [99.2, 13734.0], [99.3, 14216.0], [99.4, 14634.0], [99.5, 15077.0], [99.6, 15407.0], [99.7, 15709.0], [99.8, 16116.0], [99.9, 16800.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2200.0, "maxY": 119.0, "series": [{"data": [[2300.0, 10.0], [2200.0, 1.0], [2400.0, 24.0], [2500.0, 29.0], [2600.0, 37.0], [2700.0, 39.0], [2800.0, 25.0], [2900.0, 25.0], [3000.0, 35.0], [3100.0, 38.0], [3300.0, 43.0], [3200.0, 42.0], [3400.0, 34.0], [3500.0, 35.0], [3600.0, 49.0], [3700.0, 42.0], [3800.0, 42.0], [3900.0, 57.0], [4000.0, 57.0], [4100.0, 57.0], [4300.0, 53.0], [4200.0, 53.0], [4400.0, 65.0], [4500.0, 60.0], [4600.0, 64.0], [4700.0, 77.0], [4800.0, 78.0], [5000.0, 78.0], [5100.0, 75.0], [4900.0, 101.0], [5200.0, 85.0], [5300.0, 87.0], [5600.0, 116.0], [5400.0, 83.0], [5500.0, 103.0], [5700.0, 116.0], [5800.0, 95.0], [6000.0, 97.0], [6100.0, 97.0], [5900.0, 119.0], [6200.0, 85.0], [6300.0, 96.0], [6600.0, 117.0], [6500.0, 98.0], [6400.0, 95.0], [6700.0, 98.0], [6900.0, 103.0], [6800.0, 100.0], [7100.0, 81.0], [7000.0, 101.0], [7300.0, 92.0], [7200.0, 106.0], [7400.0, 81.0], [7600.0, 63.0], [7500.0, 103.0], [7700.0, 88.0], [7900.0, 63.0], [7800.0, 80.0], [8000.0, 70.0], [8100.0, 42.0], [8400.0, 50.0], [8700.0, 49.0], [8200.0, 45.0], [8600.0, 63.0], [8300.0, 51.0], [8500.0, 49.0], [9000.0, 43.0], [8900.0, 46.0], [9100.0, 49.0], [9200.0, 28.0], [8800.0, 29.0], [9300.0, 28.0], [9500.0, 34.0], [9700.0, 31.0], [9400.0, 35.0], [9600.0, 20.0], [9800.0, 23.0], [10000.0, 20.0], [9900.0, 21.0], [10100.0, 20.0], [10200.0, 10.0], [10500.0, 14.0], [10300.0, 13.0], [10700.0, 13.0], [10600.0, 14.0], [10400.0, 9.0], [10800.0, 10.0], [11000.0, 6.0], [10900.0, 12.0], [11100.0, 5.0], [11200.0, 5.0], [11300.0, 8.0], [11700.0, 8.0], [11400.0, 5.0], [11600.0, 8.0], [11500.0, 9.0], [11800.0, 7.0], [12100.0, 7.0], [12200.0, 6.0], [12000.0, 7.0], [11900.0, 5.0], [12700.0, 5.0], [12300.0, 3.0], [12600.0, 5.0], [12500.0, 5.0], [12400.0, 5.0], [13100.0, 5.0], [12800.0, 4.0], [13000.0, 4.0], [13300.0, 2.0], [12900.0, 2.0], [13200.0, 5.0], [13700.0, 1.0], [13600.0, 1.0], [13400.0, 3.0], [13800.0, 1.0], [14100.0, 2.0], [14300.0, 1.0], [14200.0, 1.0], [14000.0, 1.0], [14500.0, 2.0], [14800.0, 2.0], [14700.0, 2.0], [14400.0, 1.0], [14600.0, 1.0], [15100.0, 2.0], [15200.0, 2.0], [14900.0, 1.0], [15000.0, 1.0], [15800.0, 1.0], [15400.0, 3.0], [15700.0, 2.0], [15600.0, 2.0], [16200.0, 1.0], [16100.0, 4.0], [16300.0, 1.0], [17200.0, 2.0], [16800.0, 3.0], [16600.0, 1.0], [17900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5190.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5190.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 37.02671755725192, "minX": 1.60190718E12, "maxY": 40.0, "series": [{"data": [[1.60190724E12, 40.0], [1.6019079E12, 40.0], [1.60190784E12, 40.0], [1.60190754E12, 40.0], [1.60190796E12, 40.0], [1.60190766E12, 40.0], [1.6019073E12, 40.0], [1.6019076E12, 40.0], [1.60190742E12, 40.0], [1.60190772E12, 40.0], [1.60190736E12, 40.0], [1.60190802E12, 37.02671755725192], [1.60190718E12, 40.0], [1.60190748E12, 40.0], [1.60190778E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190802E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6518.0, "minX": 1.0, "maxY": 9965.0, "series": [{"data": [[33.0, 9328.0], [32.0, 9533.0], [2.0, 8691.0], [35.0, 9965.0], [34.0, 7497.0], [37.0, 9068.0], [36.0, 7713.0], [39.0, 9820.0], [38.0, 9770.0], [40.0, 6528.879270186355], [3.0, 8791.0], [4.0, 8558.0], [5.0, 6518.0], [6.0, 7211.0], [7.0, 7104.0], [9.0, 7833.0], [10.0, 8779.0], [11.0, 8834.0], [12.0, 7831.0], [13.0, 8927.0], [14.0, 6781.0], [15.0, 7013.0], [16.0, 9179.0], [1.0, 8682.0], [17.0, 7046.0], [18.0, 7773.0], [19.0, 6828.0], [20.0, 8130.0], [21.0, 8518.0], [22.0, 6950.0], [23.0, 8715.0], [24.0, 7771.0], [25.0, 8426.0], [26.0, 8634.0], [27.0, 8773.0], [28.0, 7144.0], [29.0, 9185.0], [30.0, 9110.0], [31.0, 6912.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.84993257561165, 6541.699094586803]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 708.2833333333333, "minX": 1.60190718E12, "maxY": 2150580.25, "series": [{"data": [[1.60190724E12, 1621208.75], [1.6019079E12, 1653918.4], [1.60190784E12, 2150580.25], [1.60190754E12, 1843456.3833333333], [1.60190796E12, 1646650.1166666667], [1.60190766E12, 1655458.35], [1.6019073E12, 1451314.3666666667], [1.6019076E12, 1588011.0666666667], [1.60190742E12, 2025797.7666666666], [1.60190772E12, 1460352.4], [1.60190736E12, 1673263.9166666667], [1.60190802E12, 1328114.3833333333], [1.60190718E12, 610732.0], [1.60190748E12, 1851208.1333333333], [1.60190778E12, 1412494.7166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60190724E12, 2293.266666666667], [1.6019079E12, 3016.516666666667], [1.60190784E12, 2750.7], [1.60190754E12, 3157.7833333333333], [1.60190796E12, 3201.7833333333333], [1.60190766E12, 2371.95], [1.6019073E12, 2637.85], [1.6019076E12, 2274.5833333333335], [1.60190742E12, 2950.6], [1.60190772E12, 2326.2], [1.60190736E12, 2999.2166666666667], [1.60190802E12, 1971.8166666666666], [1.60190718E12, 708.2833333333333], [1.60190748E12, 2769.9], [1.60190778E12, 3153.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190802E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5600.0092165898595, "minX": 1.60190718E12, "maxY": 7998.851145038167, "series": [{"data": [[1.60190724E12, 7352.386503067479], [1.6019079E12, 6040.384422110551], [1.60190784E12, 6654.389502762432], [1.60190754E12, 5772.7026378896835], [1.60190796E12, 5675.964454976304], [1.60190766E12, 7039.462686567165], [1.6019073E12, 6850.180055401656], [1.6019076E12, 7910.821192052976], [1.60190742E12, 6170.56555269923], [1.60190772E12, 7543.554858934165], [1.60190736E12, 5699.546798029557], [1.60190802E12, 7998.851145038167], [1.60190718E12, 6940.795698924728], [1.60190748E12, 6665.989041095892], [1.60190778E12, 5600.0092165898595]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190802E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5598.435483870971, "minX": 1.60190718E12, "maxY": 7996.29389312977, "series": [{"data": [[1.60190724E12, 7350.116564417183], [1.6019079E12, 6038.404522613068], [1.60190784E12, 6651.563535911595], [1.60190754E12, 5770.628297362109], [1.60190796E12, 5674.142180094793], [1.60190766E12, 7037.113432835824], [1.6019073E12, 6848.254847645428], [1.6019076E12, 7908.337748344374], [1.60190742E12, 6168.059125964007], [1.60190772E12, 7541.3636363636315], [1.60190736E12, 5697.546798029557], [1.60190802E12, 7996.29389312977], [1.60190718E12, 6937.623655913978], [1.60190748E12, 6663.580821917809], [1.60190778E12, 5598.435483870971]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190802E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.07345971563981045, "minX": 1.60190718E12, "maxY": 6.634408602150537, "series": [{"data": [[1.60190724E12, 0.1441717791411043], [1.6019079E12, 0.09296482412060302], [1.60190784E12, 0.09116022099447506], [1.60190754E12, 0.0839328537170264], [1.60190796E12, 0.07345971563981045], [1.60190766E12, 0.09253731343283586], [1.6019073E12, 0.10803324099722986], [1.6019076E12, 0.11920529801324503], [1.60190742E12, 0.07969151670951162], [1.60190772E12, 0.12539184952978064], [1.60190736E12, 0.07881773399014777], [1.60190802E12, 0.12213740458015263], [1.60190718E12, 6.634408602150537], [1.60190748E12, 0.11780821917808222], [1.60190778E12, 0.09447004608294939]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190802E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2289.0, "minX": 1.60190718E12, "maxY": 17955.0, "series": [{"data": [[1.60190724E12, 17955.0], [1.6019079E12, 10981.0], [1.60190784E12, 11711.0], [1.60190754E12, 13381.0], [1.60190796E12, 10010.0], [1.60190766E12, 15709.0], [1.6019073E12, 13127.0], [1.6019076E12, 13608.0], [1.60190742E12, 10083.0], [1.60190772E12, 16829.0], [1.60190736E12, 10767.0], [1.60190802E12, 13177.0], [1.60190718E12, 11805.0], [1.60190748E12, 10350.0], [1.60190778E12, 13462.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60190724E12, 3713.014991813898], [1.6019079E12, 2747.590999904871], [1.60190784E12, 2549.898991605043], [1.60190754E12, 2402.8579991030692], [1.60190796E12, 2573.6489992940424], [1.60190766E12, 3361.9919933509827], [1.6019073E12, 3316.9959946489334], [1.6019076E12, 4785.307985262871], [1.60190742E12, 2606.569999349117], [1.60190772E12, 4128.319995117187], [1.60190736E12, 2485.6299990296366], [1.60190802E12, 5298.069986832142], [1.60190718E12, 2426.0], [1.60190748E12, 3004.7549875557424], [1.60190778E12, 2328.3849980294704]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60190724E12, 3733.712601933479], [1.6019079E12, 2747.9501000380515], [1.60190784E12, 2581.5889033579824], [1.60190754E12, 2411.2190017938615], [1.60190796E12, 2581.3818013715745], [1.60190766E12, 3387.091202659607], [1.6019073E12, 3337.1956021404267], [1.6019076E12, 4840.938805894852], [1.60190742E12, 2609.027000260353], [1.60190772E12, 4140.200000762939], [1.60190736E12, 2489.0293000388147], [1.60190802E12, 5347.777005267143], [1.60190718E12, 2426.0], [1.60190748E12, 3051.7305049777033], [1.60190778E12, 2337.356000995636]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60190724E12, 3725.6029975831507], [1.6019079E12, 2747.7904999524353], [1.60190784E12, 2567.504495802522], [1.60190754E12, 2404.7389995515346], [1.60190796E12, 2575.628998285532], [1.60190766E12, 3375.9359966754914], [1.6019073E12, 3328.2179973244665], [1.6019076E12, 4816.213992631436], [1.60190742E12, 2607.9349996745586], [1.60190772E12, 4136.999999046326], [1.60190736E12, 2487.664999514818], [1.60190802E12, 5325.684993416071], [1.60190718E12, 2426.0], [1.60190748E12, 3030.852493777871], [1.60190778E12, 2333.179998755455]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60190724E12, 3376.0], [1.6019079E12, 2709.0], [1.60190784E12, 2450.0], [1.60190754E12, 2380.0], [1.60190796E12, 2517.0], [1.60190766E12, 3230.0], [1.6019073E12, 3133.0], [1.6019076E12, 4230.0], [1.60190742E12, 2545.0], [1.60190772E12, 4060.0], [1.60190736E12, 2458.0], [1.60190802E12, 4944.0], [1.60190718E12, 2426.0], [1.60190748E12, 2739.0], [1.60190778E12, 2289.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60190724E12, 6642.5], [1.6019079E12, 6181.5], [1.60190784E12, 6563.5], [1.60190754E12, 5540.0], [1.60190796E12, 5675.0], [1.60190766E12, 6092.0], [1.6019073E12, 6512.0], [1.6019076E12, 7500.0], [1.60190742E12, 6165.0], [1.60190772E12, 6778.0], [1.60190736E12, 5655.0], [1.60190802E12, 7749.5], [1.60190718E12, 7147.0], [1.60190748E12, 6693.5], [1.60190778E12, 5353.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190802E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2988.5, "minX": 1.0, "maxY": 9426.0, "series": [{"data": [[2.0, 8062.5], [8.0, 5944.5], [9.0, 5732.0], [10.0, 5120.0], [11.0, 4400.0], [3.0, 7561.0], [12.0, 4302.5], [13.0, 4076.0], [14.0, 4603.5], [15.0, 4084.0], [4.0, 7622.0], [1.0, 9007.5], [16.0, 3206.5], [18.0, 2988.5], [5.0, 7115.5], [6.0, 6558.0], [7.0, 6340.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 9426.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2988.5, "minX": 1.0, "maxY": 9426.0, "series": [{"data": [[2.0, 8061.0], [8.0, 5943.5], [9.0, 5732.0], [10.0, 5120.0], [11.0, 4400.0], [3.0, 7558.0], [12.0, 4302.0], [13.0, 4076.0], [14.0, 4600.5], [15.0, 4083.0], [4.0, 7614.5], [1.0, 9005.5], [16.0, 3206.5], [18.0, 2988.5], [5.0, 7112.0], [6.0, 6554.0], [7.0, 6340.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[6.0, 9426.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.216666666666667, "minX": 1.60190718E12, "maxY": 7.233333333333333, "series": [{"data": [[1.60190724E12, 5.433333333333334], [1.6019079E12, 6.633333333333334], [1.60190784E12, 6.033333333333333], [1.60190754E12, 6.95], [1.60190796E12, 7.033333333333333], [1.60190766E12, 5.583333333333333], [1.6019073E12, 6.016666666666667], [1.6019076E12, 5.033333333333333], [1.60190742E12, 6.483333333333333], [1.60190772E12, 5.316666666666666], [1.60190736E12, 6.766666666666667], [1.60190802E12, 3.7], [1.60190718E12, 2.216666666666667], [1.60190748E12, 6.083333333333333], [1.60190778E12, 7.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190802E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190718E12, "maxY": 7.233333333333333, "series": [{"data": [[1.60190724E12, 5.433333333333334], [1.6019079E12, 6.633333333333334], [1.60190784E12, 6.033333333333333], [1.60190754E12, 6.95], [1.60190796E12, 7.033333333333333], [1.60190766E12, 5.583333333333333], [1.6019073E12, 6.016666666666667], [1.6019076E12, 5.033333333333333], [1.60190742E12, 6.483333333333333], [1.60190772E12, 5.316666666666666], [1.60190736E12, 6.766666666666667], [1.60190802E12, 4.366666666666666], [1.60190718E12, 1.55], [1.60190748E12, 6.066666666666666], [1.60190778E12, 7.233333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60190748E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190802E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190718E12, "maxY": 7.233333333333333, "series": [{"data": [[1.60190724E12, 5.433333333333334], [1.6019079E12, 6.633333333333334], [1.60190784E12, 6.033333333333333], [1.60190754E12, 6.95], [1.60190796E12, 7.033333333333333], [1.60190766E12, 5.583333333333333], [1.6019073E12, 6.016666666666667], [1.6019076E12, 5.033333333333333], [1.60190742E12, 6.483333333333333], [1.60190772E12, 5.316666666666666], [1.60190736E12, 6.766666666666667], [1.60190802E12, 4.366666666666666], [1.60190718E12, 1.55], [1.60190748E12, 6.066666666666666], [1.60190778E12, 7.233333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60190748E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190802E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60190718E12, "maxY": 7.233333333333333, "series": [{"data": [[1.60190724E12, 5.433333333333334], [1.6019079E12, 6.633333333333334], [1.60190784E12, 6.033333333333333], [1.60190754E12, 6.95], [1.60190796E12, 7.033333333333333], [1.60190766E12, 5.583333333333333], [1.6019073E12, 6.016666666666667], [1.6019076E12, 5.033333333333333], [1.60190742E12, 6.483333333333333], [1.60190772E12, 5.316666666666666], [1.60190736E12, 6.766666666666667], [1.60190802E12, 4.366666666666666], [1.60190718E12, 1.55], [1.60190748E12, 6.066666666666666], [1.60190778E12, 7.233333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60190748E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190802E12, "title": "Total Transactions Per Second"}},
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

