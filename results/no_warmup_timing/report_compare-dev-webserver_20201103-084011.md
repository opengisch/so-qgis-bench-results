# QGIS Benchmark summary compare-dev-webserver (20201103-084011)


compare different webservers in front of of 3.10

_run completed in 00h 07m 01s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-dev-webserver_20201103-084011_plot.html)

## Summary
| name               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-nginx      | Global  |                 31.1 | +0.0%                        |           99.9 | +0.0%                  |          4803.5 | +0.0%                   |         1173 |         8181 |              9.7 |            72 |            0 |     2950.7 |    2503.73 |     2352.9 |      32.7 |   22.5667 |      13.9 |          0 |
| qgis316-standalone | Global  |                326.5 | +949.8%                      |         1527.5 | +1429.7%               |          5384.5 | +12.1%                  |         1166 |       303204 |              8.5 |            72 |            0 |     4858.9 |    3580.4  |     2391.2 |      53.2 |   20.1    |      12.8 |          0 |

## Aggregated
| name                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-nginx > somap316_grundplanav_farbig      | somap_grundplanav_farbig |                 13.1 | +0.0%                        |           59.2 | +0.0%                  |          2893.5 | +0.0%                   |          864 |         3991 |              2.8 |            22 |            0 |     2950.7 |     2706.3 |     2533.6 |      31.1 |      26.4 |      24.9 |          0 |
| qgis316-standalone > somap316_grundplanav_farbig | somap_grundplanav_farbig |                115.1 | +778.6%                      |          873.4 | +1374.1%               |          3413   | +18.0%                  |          849 |       106176 |              2.6 |            22 |            0 |     4214   |     3737   |     2391.2 |      53.2 |      25.8 |      24.8 |          0 |
| qgis316-nginx > somap316_grundplanav_sw          | somap_grundplanav_sw     |                 10.8 | +0.0%                        |           32.7 | +0.0%                  |          1654.5 | +0.0%                   |          181 |         3793 |              6.1 |            20 |            0 |     2612.5 |     2452   |     2363.1 |      32.7 |      27.4 |      25.9 |          0 |
| qgis316-standalone > somap316_grundplanav_sw     | somap_grundplanav_sw     |                204.4 | +1792.6%                     |          646.8 | +1877.3%               |          1724.5 | +4.2%                   |          200 |       196689 |              5.1 |            20 |            0 |     4858.9 |     4598.8 |     3793.1 |      51.1 |      20.2 |      12.8 |          0 |
| qgis316-standalone > somap316_lk                 | somap_lk                 |                  7   | +0.0%                        |            7.4 | +0.0%                  |           247   | +0.0%                   |          117 |          339 |              0.8 |            30 |            0 |     2405.4 |     2405.4 |     2405.4 |      14.3 |      14.3 |      14.3 |          0 |
| qgis316-nginx > somap316_lk                      | somap_lk                 |                  7.2 | +2.9%                        |            7.9 | +7.1%                  |           255.5 | +3.4%                   |          128 |          397 |              0.8 |            30 |            0 |     2352.9 |     2352.9 |     2352.9 |      13.9 |      13.9 |      13.9 |          0 |

## Detail
| name                                                                                                                                                                                                 | group                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-nginx > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-dev-webserver/20201103-084011/qgis316-nginx/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |                 13.1 | +0.0%                        |           59.2 | +0.0%                  |          2893.5 | +0.0%                   |            22 |            0 |          0 |      2693.14  |          864 |         3991 |        3851.2 |       3970.75 |          3991 |     3.00055  |               391.273  |          1.27864   |              2.8 |     2950.7 |     2706.3 |     2533.6 |      31.1 |      26.4 |      24.9 |
| [qgis316-standalone > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-dev-webserver/20201103-084011/qgis316-standalone/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                115.1 | +778.6%                      |          873.4 | +1374.1%               |          3413   | +18.0%                  |            22 |            0 |          0 |     39700.3   |          849 |       106176 |      105979   |     106175    |        106176 |     0.200521 |                24.3663 |          0.0881909 |              2.6 |     4214   |     3737   |     2391.2 |      53.2 |      25.8 |      24.8 |
| [qgis316-nginx > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-dev-webserver/20201103-084011/qgis316-nginx/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |                 10.8 | +0.0%                        |           32.7 | +0.0%                  |          1654.5 | +0.0%                   |            20 |            0 |          0 |      1635.45  |          181 |         3793 |        3353.4 |       3772    |          3793 |     4.07166  |              1266.43   |          1.70501   |              6.1 |     2612.5 |     2452   |     2363.1 |      32.7 |      27.4 |      25.9 |
| [qgis316-standalone > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-dev-webserver/20201103-084011/qgis316-standalone/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                204.4 | +1792.6%                     |          646.8 | +1877.3%               |          1724.5 | +4.2%                   |            20 |            0 |          0 |     32337.5   |          200 |       196689 |      107377   |     192225    |        196689 |     0.100607 |                26.1232 |          0.0435045 |              5.1 |     4858.9 |     4598.8 |     3793.1 |      51.1 |      20.2 |      12.8 |
| [qgis316-standalone > somap316_lk > lk.txt](../results/details/compare-dev-webserver/20201103-084011/qgis316-standalone/somap316_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  7   | +0.0%                        |            7.4 | +0.0%                  |           247   | +0.0%                   |            30 |            0 |          0 |       245.767 |          117 |          339 |         311.7 |        335.15 |           339 |    25.1889   |               680.198  |         10.62      |              0.8 |     2405.4 |     2405.4 |     2405.4 |      14.3 |      14.3 |      14.3 |
| [qgis316-nginx > somap316_lk > lk.txt](../results/details/compare-dev-webserver/20201103-084011/qgis316-nginx/somap316_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |                  7.2 | +2.9%                        |            7.9 | +7.1%                  |           255.5 | +3.4%                   |            30 |            0 |          0 |       263.233 |          128 |          397 |         341.8 |        369.5  |           397 |    23.6593   |               641.283  |          9.65164   |              0.8 |     2352.9 |     2352.9 |     2352.9 |      13.9 |      13.9 |      13.9 |

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
description: 'compare different webservers in front of of 3.10'

test-cases:
  qgis316-nginx:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.16'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap316_lk:
        - lk.txt
      somap316_grundplanav_farbig:
        - av_f.txt
      somap316_grundplanav_sw:
        - av_sw.txt

  qgis316-standalone:
    active: yes
    inherit: qgis316-nginx
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

```
### parsed test configurations

```
description: compare different webservers in front of of 3.10
test-cases:
  qgis316-nginx:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_REPLICAS: '2'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.16'
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f.txt
      somap316_grundplanav_sw:
      - av_sw.txt
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_REPLICAS: '2'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.16'
    inherit: qgis316-nginx
    path-prefix: ''
    projects:
      somap316_grundplanav_farbig:
      - av_f.txt
      somap316_grundplanav_sw:
      - av_sw.txt
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```