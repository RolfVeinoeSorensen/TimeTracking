using System;
using System.Collections.Generic;
using System.Data;
using Orchard.ContentManagement.Drivers;
using Orchard.ContentManagement.MetaData;
using Orchard.ContentManagement.MetaData.Builders;
using Orchard.Core.Contents.Extensions;
using Orchard.Data.Migration;

namespace EM.TimeTracking {
    public class Migrations : DataMigrationImpl {

        public int Create() {

            SchemaBuilder.CreateTable("MainTypeRecord", table => table
                .Column<int>("Id", column => column.PrimaryKey().Identity())
                .Column("Title", DbType.String)
            );
            SchemaBuilder.CreateTable("MainRecord", table => table
                .ContentPartRecord()
                .Column<int>("ParentId")
                .Column("Title", DbType.String)
                .Column<int>("MainTypeRecord_Id")
            )
                .CreateForeignKey(
                    "FK_EM_TimeTracking_MainTypeRecord",
                    "EM.TimeTracking", "MainRecord",
                    new[] { "MainTypeRecord_Id" },
                    "EM.TimeTracking", "MainTypeRecord",
                    new[] { "Id" }
                )
                .CreateForeignKey(
                    "FK_EM_TimeTracking_MainRecordParentChild",
                    "EM.TimeTracking", "MainRecord",
                    new[] { "ParentId" },
                    "EM.TimeTracking", "MainRecord",
                    new[] { "Id" }
                ); ;

            SchemaBuilder.CreateTable("TimeRegistrationRecord", table => table
                .Column<int>("Id", column => column.PrimaryKey().Identity())
                .Column<int>("MainId")
                .Column("Date", DbType.Date)
                .Column("Value", DbType.Decimal)
            )
            .CreateForeignKey(
                    "FK_EM_MainRecord",
                    "EM.TimeTracking", "TimeRegistrationRecord",
                    new[] { "MainId" },
                    "EM.TimeTracking", "MainRecord",
                    new[] { "Id" }
                );

            return 1;
        }


    }
}