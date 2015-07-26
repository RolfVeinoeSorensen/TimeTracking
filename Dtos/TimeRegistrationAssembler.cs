using System.Collections.Generic;
using System.Linq;
using EM.TimeTracking.Models;

namespace EM.TimeTracking.Dtos
{
    public static partial class TimeRegistrationAssembler
    {
        static partial void OnDTO(this TimeRegistrationRecord entity, TimeRegistrationDto dto);
        static partial void OnEntity(this TimeRegistrationDto dto, TimeRegistrationRecord entity);
        public static TimeRegistrationRecord ToEntity(this TimeRegistrationDto dto)
        {
            if (dto == null) return null;

            var entity = new TimeRegistrationRecord();

            entity.Id = dto.key;
            entity.MainId = dto.mainId;
            entity.Date = dto.date;
            entity.Value =  dto.value;

            dto.OnEntity(entity);

            return entity;
        }
        public static TimeRegistrationDto ToDTO(this TimeRegistrationRecord entity)
        {
            if (entity == null) return null;

            var dto = new TimeRegistrationDto();

            dto.key = entity.Id;
            dto.mainId = entity.MainId;
            dto.date = entity.Date;
            dto.value = entity.Value;

            entity.OnDTO(dto);

            return dto;
        }

        public static List<TimeRegistrationRecord> ToEntities(this IEnumerable<TimeRegistrationDto> dtos)
        {
            if (dtos == null) return null;

            return dtos.Select(e => e.ToEntity()).ToList();
        }

        public static List<TimeRegistrationDto> ToDTOs(this IEnumerable<TimeRegistrationRecord> entities)
        {
            if (entities == null) return null;

            return entities.Select(e => e.ToDTO()).ToList();
        }
    }
}