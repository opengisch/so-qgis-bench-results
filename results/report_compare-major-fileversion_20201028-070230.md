# QGIS Benchmark summary compare-major-fileversion (20201028-070230)


compare different version of QGIS servers using the same settings

_run completed in 00h 00m 35s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-fileversion_20201028-070230_plot.html)

## Summary
| name            | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-----------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316         | Global  |          6.6 |           221.5 |               0.2 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316-310file | Global  |          6.6 |           216   |               0   |            30 |            0 |     2402.5 |     2387.5 |     2372.6 |      27.2 |      17.5 |       7.8 |          0 |
| qgis316-218file | Global  |          7.5 |           249.5 |              13.8 |            30 |            0 |     2401   |     2383.7 |     2366.4 |      30.1 |      18.9 |       7.8 |          0 |
| qgis310-218file | Global  |         15.3 |           548.5 |             131.5 |            30 |            0 |     2393.2 |     2386.6 |     2373.7 |      24.1 |      15.6 |       8.3 |          0 |
| qgis310         | Global  |         15.5 |           549   |             134.6 |            30 |            0 |     2410.5 |     2405   |     2399.4 |      20.4 |      14.4 |       8.4 |          0 |

## Aggregated
| name                          | group    |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|----------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_lk         | somap_lk |          6.6 |           221.5 |               0.2 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316-310file > somap310_lk | somap_lk |          6.6 |           216   |               0   |            30 |            0 |     2402.5 |     2387.5 |     2372.6 |      27.2 |      17.5 |       7.8 |          0 |
| qgis316-218file > somap218_lk | somap_lk |          7.5 |           249.5 |              13.8 |            30 |            0 |     2401   |     2383.7 |     2366.4 |      30.1 |      18.9 |       7.8 |          0 |
| qgis310-218file > somap218_lk | somap_lk |         15.3 |           548.5 |             131.5 |            30 |            0 |     2393.2 |     2386.6 |     2373.7 |      24.1 |      15.6 |       8.3 |          0 |
| qgis310 > somap310_lk         | somap_lk |         15.5 |           549   |             134.6 |            30 |            0 |     2410.5 |     2405   |     2399.4 |      20.4 |      14.4 |       8.4 |          0 |

## Detail
| name                                                                                                                                                           | group             |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_lk > lk.txt](../results/details/compare-major-fileversion/20201028-070230/qgis316/somap316_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |          6.6 |               0.2 |            30 |            0 |          0 |       220.333 |           221.5 |          123 |          319 |         286.6 |        310.75 |           319 |      26.6667 |                722.7   |           10.8785  |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316-310file > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201028-070230/qgis316-310file/somap310_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |          6.6 |               0   |            30 |            0 |          0 |       219.8   |           216   |          150 |          305 |         282.1 |        299.5  |           305 |      27.0514 |                733.126 |           11.0354  |     2402.5 |     2387.5 |     2372.6 |      27.2 |      17.5 |       7.8 |
| [qgis316-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201028-070230/qgis316-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |          7.5 |              13.8 |            30 |            0 |          0 |       250.233 |           249.5 |          141 |          352 |         325.4 |        344.3  |           352 |      24.4898 |                663.704 |            9.99043 |     2401   |     2383.7 |     2366.4 |      30.1 |      18.9 |       7.8 |
| [qgis310-218file > somap218_lk > lk.txt](../results/details/compare-major-fileversion/20201028-070230/qgis310-218file/somap218_lk/lk.txt/dashboard/index.html) | somap_lk > lk.txt |         15.3 |             131.5 |            30 |            0 |          0 |       508.833 |           548.5 |          218 |          694 |         672.6 |        689.05 |           694 |      13.934  |                377.657 |            5.68429 |     2393.2 |     2386.6 |     2373.7 |      24.1 |      15.6 |       8.3 |
| [qgis310 > somap310_lk > lk.txt](../results/details/compare-major-fileversion/20201028-070230/qgis310/somap310_lk/lk.txt/dashboard/index.html)                 | somap_lk > lk.txt |         15.5 |             134.6 |            30 |            0 |          0 |       515.567 |           549   |          247 |          718 |         696.1 |        713.05 |           718 |      13.6426 |                369.757 |            5.56538 |     2410.5 |     2405   |     2399.4 |      20.4 |      14.4 |       8.4 |

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
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  qgis310:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_FCGI_PROCESSES: '1'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
  qgis310-218file:
    inherit: qgis310
    projects:
      somap218_lk:
        - lk.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk.txt
  qgis316-218file:
    inherit: qgis316
    projects:
      somap218_lk:
        - lk.txt
  qgis316-310file:
    inherit: qgis316
    projects:
      somap310_lk:
        - lk.txt

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis310-218file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.10'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-218file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ogc
    projects:
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-310file:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ogc
    projects:
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```