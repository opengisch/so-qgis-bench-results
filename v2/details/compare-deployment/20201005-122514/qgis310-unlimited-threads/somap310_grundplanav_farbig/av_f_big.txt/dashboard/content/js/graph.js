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
        data: {"result": {"minY": 2356.0, "minX": 0.0, "maxY": 9701.0, "series": [{"data": [[0.0, 2356.0], [0.1, 2356.0], [0.2, 2388.0], [0.3, 2795.0], [0.4, 2795.0], [0.5, 2870.0], [0.6, 3216.0], [0.7, 3262.0], [0.8, 3262.0], [0.9, 3337.0], [1.0, 3505.0], [1.1, 3523.0], [1.2, 3523.0], [1.3, 3623.0], [1.4, 3631.0], [1.5, 3634.0], [1.6, 3634.0], [1.7, 3709.0], [1.8, 3721.0], [1.9, 3721.0], [2.0, 3737.0], [2.1, 3746.0], [2.2, 3780.0], [2.3, 3780.0], [2.4, 3797.0], [2.5, 3805.0], [2.6, 3809.0], [2.7, 3809.0], [2.8, 3830.0], [2.9, 3844.0], [3.0, 3859.0], [3.1, 3859.0], [3.2, 3860.0], [3.3, 3879.0], [3.4, 3879.0], [3.5, 3895.0], [3.6, 3896.0], [3.7, 3915.0], [3.8, 3915.0], [3.9, 3928.0], [4.0, 3940.0], [4.1, 3949.0], [4.2, 3949.0], [4.3, 3960.0], [4.4, 3992.0], [4.5, 3998.0], [4.6, 3998.0], [4.7, 4005.0], [4.8, 4007.0], [4.9, 4031.0], [5.0, 4031.0], [5.1, 4038.0], [5.2, 4067.0], [5.3, 4067.0], [5.4, 4089.0], [5.5, 4097.0], [5.6, 4123.0], [5.7, 4123.0], [5.8, 4126.0], [5.9, 4131.0], [6.0, 4172.0], [6.1, 4172.0], [6.2, 4175.0], [6.3, 4182.0], [6.4, 4190.0], [6.5, 4190.0], [6.6, 4191.0], [6.7, 4203.0], [6.8, 4203.0], [6.9, 4221.0], [7.0, 4231.0], [7.1, 4236.0], [7.2, 4236.0], [7.3, 4238.0], [7.4, 4240.0], [7.5, 4255.0], [7.6, 4255.0], [7.7, 4261.0], [7.8, 4262.0], [7.9, 4269.0], [8.0, 4269.0], [8.1, 4289.0], [8.2, 4294.0], [8.3, 4302.0], [8.4, 4302.0], [8.5, 4307.0], [8.6, 4309.0], [8.7, 4309.0], [8.8, 4310.0], [8.9, 4315.0], [9.0, 4324.0], [9.1, 4324.0], [9.2, 4325.0], [9.3, 4327.0], [9.4, 4328.0], [9.5, 4328.0], [9.6, 4330.0], [9.7, 4331.0], [9.8, 4332.0], [9.9, 4332.0], [10.0, 4335.0], [10.1, 4340.0], [10.2, 4340.0], [10.3, 4341.0], [10.4, 4341.0], [10.5, 4355.0], [10.6, 4355.0], [10.7, 4368.0], [10.8, 4369.0], [10.9, 4373.0], [11.0, 4373.0], [11.1, 4379.0], [11.2, 4381.0], [11.3, 4382.0], [11.4, 4382.0], [11.5, 4385.0], [11.6, 4397.0], [11.7, 4397.0], [11.8, 4405.0], [11.9, 4413.0], [12.0, 4414.0], [12.1, 4414.0], [12.2, 4414.0], [12.3, 4422.0], [12.4, 4436.0], [12.5, 4436.0], [12.6, 4437.0], [12.7, 4441.0], [12.8, 4446.0], [12.9, 4446.0], [13.0, 4449.0], [13.1, 4450.0], [13.2, 4456.0], [13.3, 4456.0], [13.4, 4457.0], [13.5, 4463.0], [13.6, 4463.0], [13.7, 4477.0], [13.8, 4477.0], [13.9, 4496.0], [14.0, 4496.0], [14.1, 4506.0], [14.2, 4506.0], [14.3, 4506.0], [14.4, 4506.0], [14.5, 4506.0], [14.6, 4509.0], [14.7, 4517.0], [14.8, 4517.0], [14.9, 4530.0], [15.0, 4550.0], [15.1, 4550.0], [15.2, 4558.0], [15.3, 4576.0], [15.4, 4577.0], [15.5, 4577.0], [15.6, 4580.0], [15.7, 4584.0], [15.8, 4592.0], [15.9, 4592.0], [16.0, 4593.0], [16.1, 4602.0], [16.2, 4607.0], [16.3, 4607.0], [16.4, 4608.0], [16.5, 4611.0], [16.6, 4612.0], [16.7, 4612.0], [16.8, 4622.0], [16.9, 4629.0], [17.0, 4629.0], [17.1, 4636.0], [17.2, 4683.0], [17.3, 4683.0], [17.4, 4683.0], [17.5, 4700.0], [17.6, 4704.0], [17.7, 4706.0], [17.8, 4706.0], [17.9, 4709.0], [18.0, 4714.0], [18.1, 4717.0], [18.2, 4717.0], [18.3, 4745.0], [18.4, 4746.0], [18.5, 4746.0], [18.6, 4750.0], [18.7, 4753.0], [18.8, 4754.0], [18.9, 4754.0], [19.0, 4760.0], [19.1, 4766.0], [19.2, 4768.0], [19.3, 4768.0], [19.4, 4772.0], [19.5, 4774.0], [19.6, 4777.0], [19.7, 4777.0], [19.8, 4779.0], [19.9, 4786.0], [20.0, 4789.0], [20.1, 4789.0], [20.2, 4794.0], [20.3, 4819.0], [20.4, 4819.0], [20.5, 4824.0], [20.6, 4827.0], [20.7, 4828.0], [20.8, 4828.0], [20.9, 4831.0], [21.0, 4836.0], [21.1, 4838.0], [21.2, 4838.0], [21.3, 4841.0], [21.4, 4856.0], [21.5, 4876.0], [21.6, 4876.0], [21.7, 4879.0], [21.8, 4883.0], [21.9, 4883.0], [22.0, 4885.0], [22.1, 4890.0], [22.2, 4900.0], [22.3, 4900.0], [22.4, 4904.0], [22.5, 4906.0], [22.6, 4911.0], [22.7, 4911.0], [22.8, 4912.0], [22.9, 4919.0], [23.0, 4923.0], [23.1, 4923.0], [23.2, 4926.0], [23.3, 4927.0], [23.4, 4927.0], [23.5, 4939.0], [23.6, 4940.0], [23.7, 4953.0], [23.8, 4953.0], [23.9, 4966.0], [24.0, 4968.0], [24.1, 4971.0], [24.2, 4971.0], [24.3, 5002.0], [24.4, 5005.0], [24.5, 5009.0], [24.6, 5009.0], [24.7, 5010.0], [24.8, 5011.0], [24.9, 5021.0], [25.0, 5021.0], [25.1, 5030.0], [25.2, 5037.0], [25.3, 5037.0], [25.4, 5039.0], [25.5, 5047.0], [25.6, 5056.0], [25.7, 5056.0], [25.8, 5063.0], [25.9, 5069.0], [26.0, 5086.0], [26.1, 5086.0], [26.2, 5102.0], [26.3, 5107.0], [26.4, 5110.0], [26.5, 5110.0], [26.6, 5114.0], [26.7, 5118.0], [26.8, 5118.0], [26.9, 5126.0], [27.0, 5132.0], [27.1, 5136.0], [27.2, 5136.0], [27.3, 5175.0], [27.4, 5180.0], [27.5, 5190.0], [27.6, 5190.0], [27.7, 5221.0], [27.8, 5227.0], [27.9, 5234.0], [28.0, 5234.0], [28.1, 5244.0], [28.2, 5249.0], [28.3, 5257.0], [28.4, 5257.0], [28.5, 5258.0], [28.6, 5265.0], [28.7, 5265.0], [28.8, 5265.0], [28.9, 5266.0], [29.0, 5269.0], [29.1, 5269.0], [29.2, 5270.0], [29.3, 5273.0], [29.4, 5279.0], [29.5, 5279.0], [29.6, 5285.0], [29.7, 5288.0], [29.8, 5288.0], [29.9, 5288.0], [30.0, 5295.0], [30.1, 5297.0], [30.2, 5297.0], [30.3, 5304.0], [30.4, 5305.0], [30.5, 5306.0], [30.6, 5306.0], [30.7, 5312.0], [30.8, 5313.0], [30.9, 5355.0], [31.0, 5355.0], [31.1, 5356.0], [31.2, 5356.0], [31.3, 5362.0], [31.4, 5362.0], [31.5, 5367.0], [31.6, 5368.0], [31.7, 5368.0], [31.8, 5370.0], [31.9, 5373.0], [32.0, 5392.0], [32.1, 5392.0], [32.2, 5397.0], [32.3, 5406.0], [32.4, 5412.0], [32.5, 5412.0], [32.6, 5414.0], [32.7, 5420.0], [32.8, 5422.0], [32.9, 5422.0], [33.0, 5431.0], [33.1, 5437.0], [33.2, 5438.0], [33.3, 5438.0], [33.4, 5452.0], [33.5, 5465.0], [33.6, 5465.0], [33.7, 5469.0], [33.8, 5470.0], [33.9, 5476.0], [34.0, 5476.0], [34.1, 5481.0], [34.2, 5501.0], [34.3, 5507.0], [34.4, 5507.0], [34.5, 5507.0], [34.6, 5509.0], [34.7, 5509.0], [34.8, 5509.0], [34.9, 5510.0], [35.0, 5511.0], [35.1, 5511.0], [35.2, 5513.0], [35.3, 5522.0], [35.4, 5526.0], [35.5, 5526.0], [35.6, 5540.0], [35.7, 5556.0], [35.8, 5556.0], [35.9, 5556.0], [36.0, 5559.0], [36.1, 5559.0], [36.2, 5570.0], [36.3, 5570.0], [36.4, 5579.0], [36.5, 5582.0], [36.6, 5584.0], [36.7, 5584.0], [36.8, 5585.0], [36.9, 5589.0], [37.0, 5589.0], [37.1, 5593.0], [37.2, 5596.0], [37.3, 5597.0], [37.4, 5597.0], [37.5, 5597.0], [37.6, 5603.0], [37.7, 5610.0], [37.8, 5610.0], [37.9, 5610.0], [38.0, 5615.0], [38.1, 5617.0], [38.2, 5617.0], [38.3, 5618.0], [38.4, 5620.0], [38.5, 5620.0], [38.6, 5621.0], [38.7, 5628.0], [38.8, 5636.0], [38.9, 5636.0], [39.0, 5646.0], [39.1, 5659.0], [39.2, 5681.0], [39.3, 5681.0], [39.4, 5688.0], [39.5, 5688.0], [39.6, 5693.0], [39.7, 5693.0], [39.8, 5695.0], [39.9, 5697.0], [40.0, 5699.0], [40.1, 5699.0], [40.2, 5701.0], [40.3, 5704.0], [40.4, 5704.0], [40.5, 5709.0], [40.6, 5713.0], [40.7, 5723.0], [40.8, 5723.0], [40.9, 5726.0], [41.0, 5727.0], [41.1, 5729.0], [41.2, 5729.0], [41.3, 5730.0], [41.4, 5731.0], [41.5, 5736.0], [41.6, 5736.0], [41.7, 5738.0], [41.8, 5742.0], [41.9, 5742.0], [42.0, 5743.0], [42.1, 5751.0], [42.2, 5757.0], [42.3, 5757.0], [42.4, 5761.0], [42.5, 5762.0], [42.6, 5770.0], [42.7, 5770.0], [42.8, 5783.0], [42.9, 5786.0], [43.0, 5786.0], [43.1, 5786.0], [43.2, 5786.0], [43.3, 5788.0], [43.4, 5788.0], [43.5, 5790.0], [43.6, 5792.0], [43.7, 5812.0], [43.8, 5812.0], [43.9, 5819.0], [44.0, 5822.0], [44.1, 5827.0], [44.2, 5827.0], [44.3, 5828.0], [44.4, 5828.0], [44.5, 5829.0], [44.6, 5829.0], [44.7, 5837.0], [44.8, 5842.0], [44.9, 5845.0], [45.0, 5845.0], [45.1, 5848.0], [45.2, 5854.0], [45.3, 5854.0], [45.4, 5855.0], [45.5, 5875.0], [45.6, 5892.0], [45.7, 5892.0], [45.8, 5895.0], [45.9, 5896.0], [46.0, 5897.0], [46.1, 5897.0], [46.2, 5916.0], [46.3, 5921.0], [46.4, 5929.0], [46.5, 5929.0], [46.6, 5934.0], [46.7, 5935.0], [46.8, 5935.0], [46.9, 5942.0], [47.0, 5943.0], [47.1, 5943.0], [47.2, 5943.0], [47.3, 5944.0], [47.4, 5944.0], [47.5, 5946.0], [47.6, 5946.0], [47.7, 5948.0], [47.8, 5952.0], [47.9, 5955.0], [48.0, 5955.0], [48.1, 5960.0], [48.2, 5960.0], [48.3, 5966.0], [48.4, 5966.0], [48.5, 5974.0], [48.6, 5975.0], [48.7, 5975.0], [48.8, 5979.0], [48.9, 5980.0], [49.0, 5983.0], [49.1, 5983.0], [49.2, 5983.0], [49.3, 5983.0], [49.4, 5984.0], [49.5, 5984.0], [49.6, 5996.0], [49.7, 5997.0], [49.8, 6004.0], [49.9, 6004.0], [50.0, 6016.0], [50.1, 6016.0], [50.2, 6016.0], [50.3, 6020.0], [50.4, 6021.0], [50.5, 6040.0], [50.6, 6040.0], [50.7, 6055.0], [50.8, 6060.0], [50.9, 6069.0], [51.0, 6069.0], [51.1, 6070.0], [51.2, 6072.0], [51.3, 6076.0], [51.4, 6076.0], [51.5, 6078.0], [51.6, 6078.0], [51.7, 6078.0], [51.8, 6082.0], [51.9, 6085.0], [52.0, 6099.0], [52.1, 6099.0], [52.2, 6114.0], [52.3, 6124.0], [52.4, 6126.0], [52.5, 6126.0], [52.6, 6131.0], [52.7, 6134.0], [52.8, 6137.0], [52.9, 6137.0], [53.0, 6137.0], [53.1, 6139.0], [53.2, 6146.0], [53.3, 6146.0], [53.4, 6149.0], [53.5, 6150.0], [53.6, 6150.0], [53.7, 6154.0], [53.8, 6156.0], [53.9, 6158.0], [54.0, 6158.0], [54.1, 6159.0], [54.2, 6161.0], [54.3, 6165.0], [54.4, 6165.0], [54.5, 6170.0], [54.6, 6173.0], [54.7, 6173.0], [54.8, 6173.0], [54.9, 6175.0], [55.0, 6185.0], [55.1, 6185.0], [55.2, 6187.0], [55.3, 6188.0], [55.4, 6190.0], [55.5, 6190.0], [55.6, 6195.0], [55.7, 6201.0], [55.8, 6208.0], [55.9, 6208.0], [56.0, 6215.0], [56.1, 6217.0], [56.2, 6219.0], [56.3, 6219.0], [56.4, 6220.0], [56.5, 6221.0], [56.6, 6230.0], [56.7, 6230.0], [56.8, 6242.0], [56.9, 6244.0], [57.0, 6244.0], [57.1, 6244.0], [57.2, 6252.0], [57.3, 6253.0], [57.4, 6253.0], [57.5, 6254.0], [57.6, 6256.0], [57.7, 6264.0], [57.8, 6264.0], [57.9, 6269.0], [58.0, 6278.0], [58.1, 6279.0], [58.2, 6279.0], [58.3, 6291.0], [58.4, 6309.0], [58.5, 6309.0], [58.6, 6314.0], [58.7, 6316.0], [58.8, 6324.0], [58.9, 6324.0], [59.0, 6326.0], [59.1, 6338.0], [59.2, 6340.0], [59.3, 6340.0], [59.4, 6341.0], [59.5, 6345.0], [59.6, 6346.0], [59.7, 6346.0], [59.8, 6352.0], [59.9, 6355.0], [60.0, 6355.0], [60.1, 6355.0], [60.2, 6356.0], [60.3, 6359.0], [60.4, 6359.0], [60.5, 6360.0], [60.6, 6362.0], [60.7, 6384.0], [60.8, 6384.0], [60.9, 6390.0], [61.0, 6401.0], [61.1, 6409.0], [61.2, 6409.0], [61.3, 6411.0], [61.4, 6411.0], [61.5, 6413.0], [61.6, 6413.0], [61.7, 6415.0], [61.8, 6417.0], [61.9, 6417.0], [62.0, 6425.0], [62.1, 6427.0], [62.2, 6430.0], [62.3, 6430.0], [62.4, 6431.0], [62.5, 6432.0], [62.6, 6434.0], [62.7, 6434.0], [62.8, 6436.0], [62.9, 6438.0], [63.0, 6439.0], [63.1, 6439.0], [63.2, 6442.0], [63.3, 6446.0], [63.4, 6446.0], [63.5, 6451.0], [63.6, 6462.0], [63.7, 6463.0], [63.8, 6463.0], [63.9, 6469.0], [64.0, 6476.0], [64.1, 6481.0], [64.2, 6481.0], [64.3, 6486.0], [64.4, 6496.0], [64.5, 6496.0], [64.6, 6496.0], [64.7, 6496.0], [64.8, 6496.0], [64.9, 6500.0], [65.0, 6500.0], [65.1, 6505.0], [65.2, 6508.0], [65.3, 6508.0], [65.4, 6518.0], [65.5, 6522.0], [65.6, 6529.0], [65.7, 6529.0], [65.8, 6531.0], [65.9, 6544.0], [66.0, 6547.0], [66.1, 6547.0], [66.2, 6550.0], [66.3, 6563.0], [66.4, 6564.0], [66.5, 6564.0], [66.6, 6564.0], [66.7, 6566.0], [66.8, 6566.0], [66.9, 6573.0], [67.0, 6584.0], [67.1, 6586.0], [67.2, 6586.0], [67.3, 6590.0], [67.4, 6591.0], [67.5, 6592.0], [67.6, 6592.0], [67.7, 6599.0], [67.8, 6610.0], [67.9, 6610.0], [68.0, 6610.0], [68.1, 6611.0], [68.2, 6621.0], [68.3, 6630.0], [68.4, 6630.0], [68.5, 6636.0], [68.6, 6637.0], [68.7, 6637.0], [68.8, 6639.0], [68.9, 6639.0], [69.0, 6643.0], [69.1, 6643.0], [69.2, 6645.0], [69.3, 6646.0], [69.4, 6647.0], [69.5, 6647.0], [69.6, 6648.0], [69.7, 6648.0], [69.8, 6659.0], [69.9, 6659.0], [70.0, 6680.0], [70.1, 6681.0], [70.2, 6681.0], [70.3, 6682.0], [70.4, 6683.0], [70.5, 6688.0], [70.6, 6688.0], [70.7, 6689.0], [70.8, 6694.0], [70.9, 6695.0], [71.0, 6695.0], [71.1, 6697.0], [71.2, 6698.0], [71.3, 6701.0], [71.4, 6701.0], [71.5, 6711.0], [71.6, 6716.0], [71.7, 6716.0], [71.8, 6719.0], [71.9, 6719.0], [72.0, 6720.0], [72.1, 6720.0], [72.2, 6726.0], [72.3, 6729.0], [72.4, 6739.0], [72.5, 6739.0], [72.6, 6739.0], [72.7, 6742.0], [72.8, 6746.0], [72.9, 6746.0], [73.0, 6746.0], [73.1, 6753.0], [73.2, 6761.0], [73.3, 6761.0], [73.4, 6765.0], [73.5, 6766.0], [73.6, 6766.0], [73.7, 6766.0], [73.8, 6766.0], [73.9, 6769.0], [74.0, 6769.0], [74.1, 6770.0], [74.2, 6778.0], [74.3, 6790.0], [74.4, 6790.0], [74.5, 6792.0], [74.6, 6795.0], [74.7, 6832.0], [74.8, 6832.0], [74.9, 6846.0], [75.0, 6853.0], [75.1, 6853.0], [75.2, 6865.0], [75.3, 6914.0], [75.4, 6954.0], [75.5, 6954.0], [75.6, 6965.0], [75.7, 6968.0], [75.8, 6972.0], [75.9, 6972.0], [76.0, 6972.0], [76.1, 6992.0], [76.2, 6995.0], [76.3, 6995.0], [76.4, 6996.0], [76.5, 6999.0], [76.6, 7006.0], [76.7, 7006.0], [76.8, 7017.0], [76.9, 7024.0], [77.0, 7024.0], [77.1, 7034.0], [77.2, 7042.0], [77.3, 7052.0], [77.4, 7052.0], [77.5, 7052.0], [77.6, 7061.0], [77.7, 7063.0], [77.8, 7063.0], [77.9, 7077.0], [78.0, 7099.0], [78.1, 7102.0], [78.2, 7102.0], [78.3, 7107.0], [78.4, 7112.0], [78.5, 7112.0], [78.6, 7114.0], [78.7, 7115.0], [78.8, 7134.0], [78.9, 7134.0], [79.0, 7154.0], [79.1, 7155.0], [79.2, 7155.0], [79.3, 7155.0], [79.4, 7161.0], [79.5, 7164.0], [79.6, 7181.0], [79.7, 7181.0], [79.8, 7187.0], [79.9, 7188.0], [80.0, 7194.0], [80.1, 7194.0], [80.2, 7196.0], [80.3, 7196.0], [80.4, 7196.0], [80.5, 7200.0], [80.6, 7217.0], [80.7, 7219.0], [80.8, 7219.0], [80.9, 7224.0], [81.0, 7227.0], [81.1, 7230.0], [81.2, 7230.0], [81.3, 7231.0], [81.4, 7236.0], [81.5, 7243.0], [81.6, 7243.0], [81.7, 7253.0], [81.8, 7255.0], [81.9, 7255.0], [82.0, 7263.0], [82.1, 7271.0], [82.2, 7272.0], [82.3, 7272.0], [82.4, 7273.0], [82.5, 7287.0], [82.6, 7294.0], [82.7, 7294.0], [82.8, 7294.0], [82.9, 7297.0], [83.0, 7301.0], [83.1, 7301.0], [83.2, 7305.0], [83.3, 7308.0], [83.4, 7308.0], [83.5, 7315.0], [83.6, 7328.0], [83.7, 7334.0], [83.8, 7334.0], [83.9, 7336.0], [84.0, 7339.0], [84.1, 7347.0], [84.2, 7347.0], [84.3, 7357.0], [84.4, 7360.0], [84.5, 7364.0], [84.6, 7364.0], [84.7, 7368.0], [84.8, 7384.0], [84.9, 7388.0], [85.0, 7388.0], [85.1, 7389.0], [85.2, 7395.0], [85.3, 7395.0], [85.4, 7410.0], [85.5, 7411.0], [85.6, 7415.0], [85.7, 7415.0], [85.8, 7420.0], [85.9, 7429.0], [86.0, 7436.0], [86.1, 7436.0], [86.2, 7439.0], [86.3, 7452.0], [86.4, 7453.0], [86.5, 7453.0], [86.6, 7456.0], [86.7, 7463.0], [86.8, 7463.0], [86.9, 7464.0], [87.0, 7465.0], [87.1, 7475.0], [87.2, 7475.0], [87.3, 7476.0], [87.4, 7478.0], [87.5, 7481.0], [87.6, 7481.0], [87.7, 7482.0], [87.8, 7482.0], [87.9, 7486.0], [88.0, 7486.0], [88.1, 7496.0], [88.2, 7514.0], [88.3, 7519.0], [88.4, 7519.0], [88.5, 7523.0], [88.6, 7524.0], [88.7, 7524.0], [88.8, 7526.0], [88.9, 7531.0], [89.0, 7545.0], [89.1, 7545.0], [89.2, 7550.0], [89.3, 7555.0], [89.4, 7562.0], [89.5, 7562.0], [89.6, 7571.0], [89.7, 7574.0], [89.8, 7578.0], [89.9, 7578.0], [90.0, 7580.0], [90.1, 7590.0], [90.2, 7590.0], [90.3, 7594.0], [90.4, 7599.0], [90.5, 7614.0], [90.6, 7614.0], [90.7, 7620.0], [90.8, 7637.0], [90.9, 7639.0], [91.0, 7639.0], [91.1, 7641.0], [91.2, 7665.0], [91.3, 7667.0], [91.4, 7667.0], [91.5, 7676.0], [91.6, 7699.0], [91.7, 7699.0], [91.8, 7722.0], [91.9, 7726.0], [92.0, 7734.0], [92.1, 7734.0], [92.2, 7739.0], [92.3, 7740.0], [92.4, 7742.0], [92.5, 7742.0], [92.6, 7743.0], [92.7, 7755.0], [92.8, 7763.0], [92.9, 7763.0], [93.0, 7776.0], [93.1, 7777.0], [93.2, 7778.0], [93.3, 7778.0], [93.4, 7802.0], [93.5, 7805.0], [93.6, 7805.0], [93.7, 7827.0], [93.8, 7834.0], [93.9, 7863.0], [94.0, 7863.0], [94.1, 7883.0], [94.2, 7894.0], [94.3, 7910.0], [94.4, 7910.0], [94.5, 7913.0], [94.6, 7943.0], [94.7, 7945.0], [94.8, 7945.0], [94.9, 7954.0], [95.0, 7970.0], [95.1, 7970.0], [95.2, 7971.0], [95.3, 8021.0], [95.4, 8059.0], [95.5, 8059.0], [95.6, 8068.0], [95.7, 8073.0], [95.8, 8116.0], [95.9, 8116.0], [96.0, 8130.0], [96.1, 8137.0], [96.2, 8159.0], [96.3, 8159.0], [96.4, 8221.0], [96.5, 8260.0], [96.6, 8299.0], [96.7, 8299.0], [96.8, 8337.0], [96.9, 8358.0], [97.0, 8358.0], [97.1, 8369.0], [97.2, 8373.0], [97.3, 8411.0], [97.4, 8411.0], [97.5, 8482.0], [97.6, 8488.0], [97.7, 8594.0], [97.8, 8594.0], [97.9, 8675.0], [98.0, 8696.0], [98.1, 8716.0], [98.2, 8716.0], [98.3, 8772.0], [98.4, 8785.0], [98.5, 8785.0], [98.6, 8795.0], [98.7, 8816.0], [98.8, 8850.0], [98.9, 8850.0], [99.0, 8921.0], [99.1, 8922.0], [99.2, 8954.0], [99.3, 8954.0], [99.4, 9009.0], [99.5, 9213.0], [99.6, 9474.0], [99.7, 9474.0], [99.8, 9582.0], [99.9, 9701.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 29.0, "series": [{"data": [[2300.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [3200.0, 2.0], [3300.0, 1.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 6.0], [3800.0, 9.0], [3900.0, 7.0], [4000.0, 7.0], [4300.0, 25.0], [4100.0, 8.0], [4200.0, 12.0], [4400.0, 17.0], [4500.0, 15.0], [4600.0, 10.0], [4800.0, 14.0], [4700.0, 21.0], [5000.0, 14.0], [4900.0, 15.0], [5100.0, 11.0], [5300.0, 15.0], [5200.0, 19.0], [5400.0, 14.0], [5500.0, 25.0], [5600.0, 19.0], [5700.0, 26.0], [5800.0, 18.0], [5900.0, 27.0], [6100.0, 26.0], [6000.0, 17.0], [6200.0, 20.0], [6300.0, 19.0], [6500.0, 21.0], [6600.0, 26.0], [6400.0, 29.0], [6700.0, 25.0], [6900.0, 10.0], [6800.0, 4.0], [7100.0, 17.0], [7000.0, 11.0], [7400.0, 21.0], [7200.0, 19.0], [7300.0, 17.0], [7500.0, 17.0], [7600.0, 9.0], [7800.0, 7.0], [7700.0, 12.0], [7900.0, 7.0], [8100.0, 4.0], [8000.0, 4.0], [8400.0, 3.0], [8200.0, 3.0], [8500.0, 1.0], [8700.0, 4.0], [8600.0, 2.0], [8300.0, 4.0], [8800.0, 2.0], [8900.0, 3.0], [9200.0, 1.0], [9000.0, 1.0], [9400.0, 1.0], [9500.0, 1.0], [9700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 735.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 735.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 735.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 36.438356164383556, "minX": 1.60190706E12, "maxY": 40.0, "series": [{"data": [[1.60190706E12, 40.0], [1.60190718E12, 36.438356164383556], [1.60190712E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190718E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4328.0, "minX": 1.0, "maxY": 8358.0, "series": [{"data": [[33.0, 5304.0], [32.0, 5589.0], [2.0, 7594.0], [35.0, 5279.0], [34.0, 5730.0], [37.0, 5618.0], [36.0, 7388.0], [39.0, 4328.0], [38.0, 7465.0], [40.0, 5997.567528735629], [3.0, 7590.0], [4.0, 5086.0], [5.0, 5258.0], [6.0, 7571.0], [7.0, 5269.0], [8.0, 7834.0], [9.0, 5944.0], [10.0, 4714.0], [11.0, 5056.0], [12.0, 5063.0], [13.0, 8221.0], [14.0, 5783.0], [15.0, 8337.0], [16.0, 5047.0], [1.0, 6356.0], [17.0, 5729.0], [18.0, 8358.0], [19.0, 5021.0], [20.0, 5695.0], [21.0, 4966.0], [22.0, 5701.0], [23.0, 4927.0], [24.0, 5731.0], [25.0, 6069.0], [26.0, 4904.0], [27.0, 7777.0], [28.0, 4911.0], [29.0, 8021.0], [30.0, 8130.0], [31.0, 5313.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.93877551020409, 6004.059863945576]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 871.2333333333333, "minX": 1.60190706E12, "maxY": 943695.3666666667, "series": [{"data": [[1.60190706E12, 414483.5333333333], [1.60190718E12, 477559.31666666665], [1.60190712E12, 943695.3666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60190706E12, 871.2333333333333], [1.60190718E12, 1640.9], [1.60190712E12, 3010.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190718E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5980.2443890274335, "minX": 1.60190706E12, "maxY": 6130.6434782608685, "series": [{"data": [[1.60190706E12, 6130.6434782608685], [1.60190718E12, 5981.196347031962], [1.60190712E12, 5980.2443890274335]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190718E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5979.139650872817, "minX": 1.60190706E12, "maxY": 6128.782608695649, "series": [{"data": [[1.60190706E12, 6128.782608695649], [1.60190718E12, 5980.118721461186], [1.60190712E12, 5979.139650872817]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190718E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60190706E12, "maxY": 5.434782608695651, "series": [{"data": [[1.60190706E12, 5.434782608695651], [1.60190718E12, 0.0], [1.60190712E12, 0.11221945137157101]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190718E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2356.0, "minX": 1.60190706E12, "maxY": 9701.0, "series": [{"data": [[1.60190706E12, 9701.0], [1.60190718E12, 8358.0], [1.60190712E12, 8921.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60190706E12, 2357.40799911499], [1.60190718E12, 3779.1399977445603], [1.60190712E12, 3716.4159988498686]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60190706E12, 2360.748800354004], [1.60190718E12, 3804.0300028324127], [1.60190712E12, 3720.7576004600523]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60190706E12, 2359.263999557495], [1.60190718E12, 3792.149996459484], [1.60190712E12, 3718.827999424934]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60190706E12, 2356.0], [1.60190718E12, 3737.0], [1.60190712E12, 3505.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60190706E12, 6360.0], [1.60190718E12, 6154.0], [1.60190712E12, 5975.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190718E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4714.5, "minX": 4.0, "maxY": 6427.5, "series": [{"data": [[4.0, 5766.0], [8.0, 5414.0], [9.0, 4968.0], [5.0, 6417.0], [10.0, 5698.0], [11.0, 4714.5], [6.0, 6427.5], [7.0, 5944.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4713.0, "minX": 4.0, "maxY": 6426.5, "series": [{"data": [[4.0, 5765.0], [8.0, 5413.0], [9.0, 4968.0], [5.0, 6417.0], [10.0, 5698.0], [11.0, 4713.0], [6.0, 6426.5], [7.0, 5941.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5833333333333335, "minX": 1.60190706E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60190706E12, 2.5833333333333335], [1.60190718E12, 2.9833333333333334], [1.60190712E12, 6.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190718E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60190706E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60190706E12, 1.9166666666666667], [1.60190718E12, 3.65], [1.60190712E12, 6.683333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60190718E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60190706E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60190706E12, 1.9166666666666667], [1.60190718E12, 3.65], [1.60190712E12, 6.683333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190718E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9166666666666667, "minX": 1.60190706E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60190706E12, 1.9166666666666667], [1.60190718E12, 3.65], [1.60190712E12, 6.683333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60190718E12, "title": "Total Transactions Per Second"}},
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

