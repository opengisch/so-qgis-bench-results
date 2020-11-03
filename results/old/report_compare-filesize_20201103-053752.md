# QGIS Benchmark summary compare-filesize (20201103-053752)


compare the effect of different QGIS project file size in QGIS 2.18

_run completed in 00h 14m 00s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201103-053752_plot.html)

## Summary
| name              | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-smallfile | Global  |                 26.1 | +0.0%                        |           66.5 | +0.0%                  |          2654   | +57.7%                  |          767 |         6887 |              9.7 |            72 |            0 |     2962.8 |    2883.85 |     2805.1 |      98.4 |   70.15   |      26.2 |          0 |
| qgis218-smallfile | Global  |                 26.7 | +2.3%                        |           72   | +8.2%                  |          2884   | +71.4%                  |          619 |         7552 |             11.2 |            72 |            0 |     3338.6 |    2915.3  |     2613.6 |      97.4 |   50.3    |      12.8 |          0 |
| qgis218-bigfile   | Global  |                 36.5 | +39.8%                       |          125.9 | +89.2%                 |          1682.5 | +0.0%                   |          492 |        17940 |              1.6 |            72 |            0 |     7089.9 |    6544.57 |     4897.8 |      99.7 |   61.9    |       6.1 |          0 |
| qgis316-bigfile   | Global  |                 50.4 | +93.1%                       |          259.9 | +290.6%                |         12033   | +615.2%                 |         5028 |        18484 |             13   |            72 |            0 |     9712.6 |    6696.9  |     6215.5 |      75.9 |   63.5333 |      14.6 |          0 |

## Aggregated
| name                                            | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-bigfile > somap218_fix                  | somap_fix                |                 36.5 | +0.0%                        |          125.9 | +0.0%                  |          1682.5 | +0.0%                   |          492 |        17940 |              1.6 |            72 |            0 |     7089.9 |    6544.57 |     4897.8 |      99.7 |   61.9    |       6.1 |          0 |
| qgis316-bigfile > somap316_fix                  | somap_fix                |                 50.4 | +38.1%                       |          259.9 | +106.5%                |         12033   | +615.2%                 |         5028 |        18484 |             13   |            72 |            0 |     9712.6 |    6696.9  |     6215.5 |      75.9 |   63.5333 |      14.6 |          0 |
| qgis218-smallfile > somap218_grundplanav_farbig | somap_grundplanav_farbig |                  9.5 | +0.0%                        |           32.9 | +7.3%                  |          1388.5 | +30.3%                  |          246 |         3566 |              3.4 |            22 |            0 |     3101.1 |    2903.8  |     2622.8 |      97.4 |   69      |      24.9 |          0 |
| qgis316-smallfile > somap316_grundplanav_farbig | somap_grundplanav_farbig |                  9.6 | +1.1%                        |           30.6 | +0.0%                  |          1065.5 | +0.0%                   |          460 |         2885 |              2.8 |            22 |            0 |     2858.1 |    2835.4  |     2805.1 |      98.4 |   70.3    |      32.3 |          0 |
| qgis218-smallfile > somap218_grundplanav_sw     | somap_grundplanav_sw     |                  9.6 | +0.0%                        |           27.9 | +0.0%                  |          1342   | +0.0%                   |          245 |         2829 |              7   |            20 |            0 |     3338.6 |    3228.5  |     3047.5 |      97.4 |   69.1    |      27.1 |          0 |
| qgis316-smallfile > somap316_grundplanav_sw     | somap_grundplanav_sw     |                  9.6 | +0.0%                        |           29.3 | +4.8%                  |          1455   | +8.4%                   |          237 |         3199 |              6.1 |            20 |            0 |     2962.8 |    2932.3  |     2894.7 |      96   |   70      |      26.2 |          0 |
| qgis316-smallfile > somap316_lk                 | somap_lk                 |                  6.9 | +0.0%                        |            6.7 | +0.0%                  |           133.5 | +0.0%                   |           70 |          803 |              0.8 |            30 |            0 |     -inf   |     nan    |      inf   |    -inf   |  nan      |     inf   |          0 |
| qgis218-smallfile > somap218_lk                 | somap_lk                 |                  7.6 | +10.1%                       |           11.2 | +68.4%                 |           153.5 | +15.0%                  |          128 |         1157 |              0.8 |            30 |            0 |     2613.6 |    2613.6  |     2613.6 |      12.8 |   12.8    |      12.8 |          0 |

## Detail
| name                                                                                                                                                                                          | group                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-bigfile > somap218_fix > av_f.txt](../results/details/compare-filesize/20201103-053752/qgis218-bigfile/somap218_fix/av_f.txt/dashboard/index.html)                                   | somap_fix > av_f.txt                |                 10.3 | +0.0%                        |           21   | +0.0%                  |           712.5 | +0.0%                   |            22 |            0 |          0 |       956.091 |          210 |         4306 |        3332.1 |       4301.8  |          4306 |      4.5738  |               177.935  |           1.88207  |              0.8 |     7002.9 |     6612.4 |     6394.4 |      94.7 |      50.7 |      25.8 |
| [qgis316-bigfile > somap316_fix > av_f.txt](../results/details/compare-filesize/20201103-053752/qgis316-bigfile/somap316_fix/av_f.txt/dashboard/index.html)                                   | somap_fix > av_f.txt                |                 18.2 | +76.7%                       |          100.4 | +377.2%                |          4763.5 | +568.6%                 |            22 |            0 |          0 |      4562.73  |         1797 |         6396 |        6353.8 |       6390.3  |          6396 |      1.71727 |               225.119  |           0.706638 |              2.8 |     9712.6 |     6962.3 |     6219   |      75.8 |      63.3 |      23.2 |
| [qgis218-bigfile > somap218_fix > av_sw.txt](../results/details/compare-filesize/20201103-053752/qgis218-bigfile/somap218_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt               |                  8.1 | +0.0%                        |           15.7 | +0.0%                  |           849   | +0.0%                   |            20 |            0 |          0 |       784.95  |          224 |         1204 |        1140.7 |       1200.95 |          1204 |      8.15993 |               138.608  |           3.32932  |              0.3 |     7089.9 |     7061.4 |     7032.9 |      90.7 |      58.6 |      26.4 |
| [qgis316-bigfile > somap316_fix > av_sw.txt](../results/details/compare-filesize/20201103-053752/qgis316-bigfile/somap316_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt               |                 16.3 | +101.2%                      |           76.5 | +387.3%                |          4007.5 | +372.0%                 |            20 |            0 |          0 |      3825.2   |         1634 |         8395 |        5776.7 |       8269    |          8395 |      1.85117 |               894.648  |           0.75529  |              9.4 |     8155.6 |     6902.8 |     6290.7 |      75.5 |      62.8 |      30.9 |
| [qgis316-bigfile > somap316_fix > lk.txt](../results/details/compare-filesize/20201103-053752/qgis316-bigfile/somap316_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                  |                 15.9 | +0.0%                        |           83   | +0.0%                  |          3262   | +2595.9%                |            30 |            0 |          0 |      2767.87  |         1597 |         3693 |        3606.4 |       3690.25 |          3693 |      2.86779 |                77.7264 |           1.1727   |              0.8 |     6241.3 |     6225.6 |     6215.5 |      75.9 |      64.5 |      14.6 |
| [qgis218-bigfile > somap218_fix > lk.txt](../results/details/compare-filesize/20201103-053752/qgis218-bigfile/somap218_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                  |                 18.1 | +13.8%                       |           89.1 | +7.3%                  |           121   | +0.0%                   |            30 |            0 |          0 |      2971.17  |           58 |        12430 |       11569.2 |      12249    |         12430 |      2.41352 |                40.4247 |           0.986933 |              0.5 |     6324.2 |     5959.9 |     4897.8 |      99.7 |      76.4 |       6.1 |
| [qgis218-smallfile > somap218_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201103-053752/qgis218-smallfile/somap218_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                  9.5 | +0.0%                        |           32.9 | +7.3%                  |          1388.5 | +30.3%                  |            22 |            0 |          0 |      1494.05  |          246 |         3566 |        3372.9 |       3545    |          3566 |      5.3515  |               845.739  |           2.28047  |              3.4 |     3101.1 |     2903.8 |     2622.8 |      97.4 |      69   |      24.9 |
| [qgis316-smallfile > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201103-053752/qgis316-smallfile/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                  9.6 | +1.1%                        |           30.6 | +0.0%                  |          1065.5 | +0.0%                   |            22 |            0 |          0 |      1391.77  |          460 |         2885 |        2738.6 |       2863.4  |          2885 |      5.64682 |               736.271  |           2.40631  |              2.8 |     2858.1 |     2835.4 |     2805.1 |      98.4 |      70.3 |      32.3 |
| [qgis218-smallfile > somap218_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201103-053752/qgis218-smallfile/somap218_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                  9.6 | +0.0%                        |           27.9 | +0.0%                  |          1342   | +0.0%                   |            20 |            0 |          0 |      1396.3   |          245 |         2829 |        2355.3 |       2805.85 |          2829 |      5.28961 |              1896.17   |           2.21502  |              7   |     3338.6 |     3228.5 |     3047.5 |      97.4 |      69.1 |      27.1 |
| [qgis316-smallfile > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201103-053752/qgis316-smallfile/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                  9.6 | +0.0%                        |           29.3 | +4.8%                  |          1455   | +8.4%                   |            20 |            0 |          0 |      1463.1   |          237 |         3199 |        2842.8 |       3181.45 |          3199 |      4.96278 |              1543.84   |           2.07816  |              6.1 |     2962.8 |     2932.3 |     2894.7 |      96   |      70   |      26.2 |
| [qgis316-smallfile > somap316_lk > lk.txt](../results/details/compare-filesize/20201103-053752/qgis316-smallfile/somap316_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  6.9 | +0.0%                        |            6.7 | +0.0%                  |           133.5 | +0.0%                   |            30 |            0 |          0 |       222.067 |           70 |          803 |         781.6 |        798.05 |           803 |     27.3473  |               741.199  |          11.1561   |              0.8 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218-smallfile > somap218_lk > lk.txt](../results/details/compare-filesize/20201103-053752/qgis218-smallfile/somap218_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  7.6 | +10.1%                       |           11.2 | +68.4%                 |           153.5 | +15.0%                  |            30 |            0 |          0 |       373.933 |          128 |         1157 |        1153.8 |       1157    |          1157 |     15.873   |               430.799  |           6.47528  |              0.8 |     2613.6 |     2613.6 |     2613.6 |      12.8 |      12.8 |      12.8 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare the effect of different QGIS project file size in QGIS 2.18'

test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_FCGI_PROCESSES: '1'
      PG_SERVICE: 'pg_service.conf'

  qgis218-bigfile:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt

  qgis218-smallfile:
    inherit: qgis218-bigfile
    active: yes
    projects:
      somap218_lk:
        - lk.txt
      somap218_grundplanav_farbig:
        - av_f.txt
      somap218_grundplanav_sw:
        - av_sw.txt

  qgis316-bigfile:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap316_fix:
        - lk.txt
        - av_f.txt
        - av_sw.txt

  qgis316-smallfile:
    inherit: qgis316-bigfile
    active: yes
    projects:
      somap316_lk:
        - lk.txt
      somap316_grundplanav_farbig:
        - av_f.txt
      somap316_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS project file size in QGIS 2.18
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
  qgis218-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
    inherit: base
    path-prefix: ows
    projects:
      somap218_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-2
  qgis218-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
    inherit: qgis218-bigfile
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f.txt
      somap218_grundplanav_sw:
      - av_sw.txt
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-2
  qgis316-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap316_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis316-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_VERSION: '3.10'
    inherit: qgis316-bigfile
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f.txt
      somap316_grundplanav_sw:
      - av_sw.txt
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```