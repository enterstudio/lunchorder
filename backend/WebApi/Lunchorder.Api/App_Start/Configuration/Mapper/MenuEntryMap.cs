﻿using AutoMapper;

namespace Lunchorder.Api.Configuration.Mapper
{
    public class MenuEntryMap : Profile
    {
        protected override void Configure()
        {
            CreateMap<Domain.Entities.DocumentDb.MenuEntry, Domain.Dtos.MenuEntry>();
        }
    }
}